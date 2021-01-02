import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckInputService {

  specialCharKeys:any[]=[110,186,187,188,189,190,191,192,219,220,221,222]	;

  constructor() { }

  //#region Validate input entry type
  checkInput(e,type:any){
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+C
    (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+V
    (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+X
    (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39) ||
    //Allow +
    (e.keyCode === 107) || e.shiftKey )

     {
      // let it happen, don't do anything
      return;
    }
    if(type=='no')
       this.allowNumber(e);
    else if(type=='decimal')
       this.allowDecimalNumber(e);
    else if(type=='char')
       this.allowChar(e);
    else if(type=='sp')
       this.allowSpecial(e);
    else if(type=='phone')
       this.allowPhoneNumber(e);

  }
  // // 	48:57 , 96:105  144 lock numbers
  // // 65:90 chars
  allowNumber(e){

   // Ensure that it is a number and stop the keypress
   if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode===190 ) {

    e.preventDefault();
    }
  }

  allowDecimalNumber(e){
    if(e.keyCode == 190) return;
    // Ensure that it is a number and stop the keypress
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {

     e.preventDefault();
     }
   }

  allowPhoneNumber(e){

   // Ensure that it is a number and stop the keypress
   if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode===190 ) {

    e.preventDefault();
    }
  }
  allowChar(e){

    // if (e.keyCode > 47 && e.keyCode < 58 || e.keyCode > 95 && e.keyCode < 107 )
    if (((e.keyCode > 90 || e.keyCode < 65) && e.keyCode !== 32) || e.keyCode===190 || e.keyCode===110)
        e.preventDefault();
  }
  allowSpecial(e){

    if ((e.keyCode > 90 || e.keyCode < 65 ) && this.specialCharKeys.indexOf(e.keyCode)===-1)
        e.preventDefault();
  }
  //#endregion


}
