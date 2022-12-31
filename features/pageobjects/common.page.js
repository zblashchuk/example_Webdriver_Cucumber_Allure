const Page = require('./page');
class CommonPage extends Page{
  openHomePage(){
    browser.url("https://webdriver.io/");
    console.log("Navigate to url 'https://webdriver.io/'")
  }
}
module.exports = new CommonPage();