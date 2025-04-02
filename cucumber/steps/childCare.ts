import { Given, Then, When } from "@cucumber/cucumber";
import { ChildCarePage } from "../pages/ChildCarePage";

Given("user clicks on the find a center icon", async function () {
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

Given("user clicks on the search icon", async function () {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.clickOnSearch();
});

Given("user confirms that the search field appears", async function () {
  const childCarePage = new ChildCarePage(this.page);

  await childCarePage.confirmSearchField();
});

When(
  "user searches for the {string} text",
  async function (searchItem: string) {
    const childCarePage = new ChildCarePage(this.page);

    await childCarePage.searchWithResource(searchItem);
  },
);

Then(
  "user verifies that the first resource {string} in the search results is correct",
  async function (expectedResouce: string) {
    const childCarePage = new ChildCarePage(this.page);

    await childCarePage.confirmFirstResource(expectedResouce);
  },
);
