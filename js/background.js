/*
chrome.contextMenus.create({
    title : 'DRMaker',
    type : 'normal',
    contexts : ['all'],
    id: 'parent_id',
    onclick : () => alert('hello')
});
*/
// background.js

// Wrap in an onInstalled callback in order to avoid unnecessary work
// every time the background script is run
chrome.runtime.onInstalled.addListener(() => {
    // Page actions are disabled by default and enabled on select tabs
    chrome.action.disable();
  /*
    // Clear all rules to ensure only our expected rules are set
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      // Declare a rule to enable the action on example.com pages
      let exampleRule = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: '*.yahoo.co.jp'},
          })
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      };
  
      // Finally, apply our new array of rules
      let rules = [exampleRule];
      chrome.declarativeContent.onPageChanged.addRules(rules);
    });
    */
  });
  chrome.tabs.onActivated.addListener(() => {
    console.info("onActivated---");
  //  chrome.action.disable();
  });
  chrome.webNavigation.onCompleted.addListener(()=>{
    console.info("webNavigation.onCompleted---");
  //  chrome.action.disable();
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
    console.info("webNavigation.onCompleted---");
  //  chrome.action.disable();
    const url = e[0].url;
    console.log(url);
  });
  chrome.tabs.onActivated.addListener(() =>{
    console.info("tabs.onActivated---");
    chrome.action.disable();
//    const url = e[0].url;
  //  console.log(url);
  });
