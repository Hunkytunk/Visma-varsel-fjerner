browser.browserAction.onClicked.addListener(function(){
    browser.tabs.executeScript({file: "/content_scripts/fjerner.js"}).catch(function(error){console.log(error)});
});