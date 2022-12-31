const Page = require('./page');

class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get search () {
        return $('.DocSearch-Button-Placeholder');
    }

    get inputSearch () {
        return $('#docsearch-input');
    }
     async clickInputSearch()
     {
       await this.search.click()
       await this.inputSearch.isClickable()
       await (this.inputSearch.click())
     }
     async addValueSearch()
     {
       await this.inputSearch.addValue('text')
       await expect(this.inputSearch).toHaveValue('text')
     }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new SearchPage();