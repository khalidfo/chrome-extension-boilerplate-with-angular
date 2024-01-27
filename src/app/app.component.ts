// #region
import { Component } from '@angular/core';
// #endregion

// #region Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// #endregion

// #region App Component
export class AppComponent {
  title = 'Chrome Extension Boilerplate with Angular';
  popupPositionKey :string = 'popup_position';

  // #region Constructor
  constructor() {
  }
  // #endregion

  // #region on init
  async ngOnInit() { 
    console.log(1);
    let rdoPlaceValue = await this.readLocalStorage();

    console.log('rdoPlaceValue:' + rdoPlaceValue);

    // Traverse to all elements
    document.getElementsByName('rdoPosition').forEach(el => {
      // Cast HTMLElement to HTMLInputElement
      let htmlLE = (<HTMLInputElement>el);

      //console.log('htmlLE:' );
      //console.log(htmlLE);
      
      // If mached with save recode it will checked
      if (htmlLE.value === rdoPlaceValue) 
        htmlLE.checked = true;

      //console.log('befoer addEventListener');

      // Add Event Listener to all radio buttons
      el.addEventListener('click', this.saveToLocalStorage.bind(this))
      //console.log('after addEventListener');
    });
  }
  // #endregion

 // #region Save radio button value to local storage
 saveToLocalStorage(e:any) {
    let optVal = e.srcElement.value;
      console.log('optVal' + optVal);
      chrome.storage.local.set({ 'popup_position' :  optVal}, function(){
      console.log('Saved: ' + optVal);
      
      // TODO 
      // it is not working 
      // it may work https://stackoverflow.com/questions/3457391/how-do-you-use-window-postmessage-across-domains
      // window.postMessage({ type: "FROM_SITE_POPUP", optVal });     
    }); 
 }
 // #endregion

 // #region Read value from local storage
 async readLocalStorage () {

  chrome.storage.local.get(['popup_position'], function (result) { 
    console.log('result-->');
    console.log(result);
  });
        return new Promise((resolve, reject) => {
      chrome.storage.local.get(['popup_position'], function (result) {        
        console.log('result');
        console.log(result);
        console.log('result.popup_position');
        console.log(result.popup_position);

        if(typeof result.popup_position !== 'undefined') {
          resolve(result.popup_position);
        } else {
          reject();
        } 

        // if (result['popup_position'] === undefined) {
        //   console.log('reject');

        //   reject();
        // } else {
        //   console.log('resolve');
        //   resolve(result['popup_position']);
        // }

      });
    });
  };
  // #endregion
}
// #endregion
