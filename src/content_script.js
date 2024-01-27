console.log('I am from content script.');

addInjectedScript();

// #region Add injected script
function addInjectedScript() {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('injected_script.js');
    s.onload = function () { this.remove(); };
    (document.head || document.documentElement).appendChild(s);
}
// #endregion 