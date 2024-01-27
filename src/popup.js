;
console.log('I am from popup script');   

function injectTheScript() {  
    // Query the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id}, files: ['content_script.js']
        });
    }); 
}

document.getElementById('btnContentScript').addEventListener('click', injectTheScript);



// #region Add injected script
function addInjectedScript() {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('injected_script.js');
    s.onload = function () { this.remove(); };
    (document.head || document.documentElement).appendChild(s);
}
// #endregion 
