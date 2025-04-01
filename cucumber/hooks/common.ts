import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { Browser, Page, BrowserContext } from "@playwright/test";
import { chromium } from "playwright";

let browser: Browser;
let baseURL: string = "https://www.brighthorizons.com//";
let context: BrowserContext;

setDefaultTimeout(60000);

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 200,
  });
  context = await browser.newContext({
    baseURL,
    viewport: {
      height: 1080,
      width: 1920,
    },
    permissions: ["geolocation"],
  });
});

Before(async function () {
  this.page = await context.newPage();
  await this.page.goto(baseURL);
 
  this.page.on("dialog", async function (dialog: { message: () => any; dismiss: () => any; }) {
    console.log(`Dialog: ${dialog.message()}`);
    await dialog.dismiss(); 
  });

  try {
    await this.page.click('#onetrust-accept-btn-handler');
  } catch (error) {
    console.log("No cookie popup found");
  }
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, "image/png");
  }
  await this.page?.close();
});

AfterAll(async function() {
  await context?.close(); 
  await browser?.close();
});