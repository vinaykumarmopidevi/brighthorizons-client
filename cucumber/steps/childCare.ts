import { Given, Then, When } from "@cucumber/cucumber";
import { ChildCarePage } from "../pages/ChildCarePage";

Given("user clicks on the {string} option", async function (string) {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.clickOnFindCenter();
});

Given(
  "user confirms the {string} as a part of its URL",
  async function (subUrl: string) {
    const childCarePage = new ChildCarePage(this.page);

    await childCarePage.confirmUrlContains(subUrl);
  },
);

Given("user selects the {string} location", async function (location: string) {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.fillFindCenetr(location);
});

Given("user verifies the search results count", async function () {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.confirmCenters();
});

When("user clicks on the first child care center", async function () {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.clickChildCareCenter();
});

Then("user compares the address with the map view", async function () {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.compareMapAddress();
});
