import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class ChildCarePage extends BasePage {
  async clickOnFindCenter() {
    const findCenter = this.page
      .locator(
        "[class='nav-item displayed-desktop'] [class='btn-nav btn btn-large btn-hollow color-nileblue global_header_findcenter track_cta_click']",
      )
      .nth(1);

    await findCenter.click();
  }

  async confirmUrlContains(urlPiece: string) {
    const urlPart = new RegExp(urlPiece);

    await expect(this.page).toHaveURL(urlPart);
  }

  async fillFindCenetr(location: string) {
    const findCenter = this.page
    .locator("[class='centerResult infoWindow track_center_select covidOpen']")
    .nth(1);
    const  addressInput= this.page.locator("#addressInput");

    await expect(findCenter).toBeVisible({timeout:60000});
    
    await this.page.type('#addressInput', location, { delay: 200 });
    await this.page.getByText('NY, USA', { exact: true }).click();
    

  }

  async confirmCenters() {
    const resultsNumberLocator = this.page.locator("[class='resultsNumber']");
    const centerResult = this.page.locator(
      "[class='centerResult infoWindow track_center_select covidOpen']",
    );

    const resultsText = await resultsNumberLocator.textContent();
    const expectedCount = parseInt(resultsText?.trim() || "0", 10);

    await expect(centerResult).toHaveCount(expectedCount);
  }

  async clickChildCareCenter() {
    const findCenter = this.page.locator('[id="1489"]')

    await findCenter.click();
  }

  async compareMapAddress() {
    const trackCenterSelect = this.page
      .locator("[class='centerResult infoWindow track_center_select covidOpen active']")
    const headingSection = trackCenterSelect.locator(".heading-section");
    const centerResultName = headingSection.locator(
      ".centerResult__name",
    );
    const centerResultAddress = headingSection.locator(
      ".centerResult__address",
    );
    const mapheadline = this.page.locator(".mapTooltip__headline");
    const mapTooltipAddress = this.page.locator(".mapTooltip__address");

    const centerName = await centerResultName.textContent();
    const centerAddress = await centerResultAddress.textContent();
    const mapheadlineName = await mapheadline.textContent();
    const mapAddress = await mapTooltipAddress.textContent();

    expect(centerName?.trim()).toBe(mapheadlineName?.trim());
    expect(centerAddress?.trim()).toBe(mapAddress?.trim());
  }
}
