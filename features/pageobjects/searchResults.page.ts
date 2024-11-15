import {$} from '@wdio/globals'
import { browser } from '@wdio/globals';


class searchResults 
{
    searchElement =  $("//input[@id='search']");
    fullDOM =  $("//ytd-app")

    searchBtn = $("//button[@id='search-icon-legacy']");
    searchBar = $("//input[@id='search']");


    savescreenshot = async (i:number) => { await this.fullDOM.saveScreenshot("./screenshots/Watson161/"+"1.png")};

    searchClick()
    {
        this.searchBtn.click();
    }

    async sendKeysSearchBar(c:String)
    {
        this.searchBar.setValue(c);

        await browser.keys("\uE007");

    }

}export default new searchResults;