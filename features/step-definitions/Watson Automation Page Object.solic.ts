import { Given, When, Then } from '@wdio/cucumber-framework'

import {browser} from '@wdio/globals'
import { $ } from '@wdio/globals'
import youTubeDefaultPage from '../pageobjects/youTubeDefault.page';
import searchResultsPage from '../pageobjects/searchResults.page';


Given(/^Open Browser and Navigate to youtube$/,async function(){

    browser.url("https://www.youtube.com");
    youTubeDefaultPage.openYoutube();


});

When(/^Search Shane Watson MCG vs England 161$/,async function(){
    
    await browser.pause(3000);
    searchResultsPage.sendKeysSearchBar("Shane Watson MCG vs England 161");


    // searchResultsPage.searchClick;
    searchResultsPage.savescreenshot;
    
    await browser.pause(3000);

    searchResultsPage.savescreenshot;

});

Then(/^Will get many search results$/,async function(){
    const searchResults = await $("//ytd-two-column-search-results-renderer//div[@id='primary' and contains(@class,'results-renderer')]");
    console.log("\nSearch results are visible")
});

Given(/^Already on the Youtube Watson video Search Page$/,async function(){

    const elem = await $("//input[@id='search']");
    const fullDOM = await $("//ytd-app")
    await fullDOM.saveScreenshot('./screenshots/Watson161/8.png');


});

When(/^Original Cricket Australia video is visible$/,async function(){

    const videoTile = await $("//a[text()='cricket.com.au']//..//..//..//..//..//..//div[@id='title-wrapper']");
    const fullDOM = await $("//ytd-app")
    await fullDOM.saveScreenshot('./screenshots/Watson161/9.png');

    videoTile.click();

    await browser.pause(3000);
    // const searchBtn = await $("//id[@id='search-icon-legacy']");
    // searchBtn.click();
});

Then(/^User will click and watch it for 10 seconds$/,async function(){
    const searchResults = await $("//ytd-two-column-search-results-renderer//div[@id='primary' and contains(@class,'results-renderer')]");

    
    console.log("\nVideo should play now")


    //a[text()="cricket.com.au"]//..//..//..//..//..//..//div[@id="title-wrapper"]

});
