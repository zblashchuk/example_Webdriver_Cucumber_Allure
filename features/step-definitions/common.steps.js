const { Given,When,Then } = require ("@wdio/cucumber-framework");
const commonPage = require("../pageobjects/common.page");
const { addValueSearch } = require("../pageobjects/search.page");
const searchPage = require("../pageobjects/search.page");

Given(/^I am on webdriverio page$/, async () => {
  commonPage.openHomePage();

});
When(/^I click on search$/, async () => {
  await searchPage.clickInputSearch()
});

Then(/^I type text to search$/, async () => {
  await searchPage.addValueSearch();
});
