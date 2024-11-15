import { $ } from '@wdio/globals'

class YoutubeDefault 
{

    public get searchBar()
    {
        return $("//input[@id='search']");
    }

    public get fullDOM()
    {
        return $("//ytd-app");
    }


    async openYoutube()
    {

        
        await this.searchBar;
        this.fullDOM.saveScreenshot('./screenshots/Watson161/91.png');

    }

}
export default new YoutubeDefault;
