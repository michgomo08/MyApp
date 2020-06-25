import { Component } from '@angular/core';
declare var cordova:any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // tslint:disable-next-line: ban-types
  PIN:String;
  PASSWORD_INPUT_TYPE = 'password';
  PASSWORD_INPUT_ICON = 'eye';

  constructor() {
  }

  hideShowPassword() {
    this.PASSWORD_INPUT_TYPE = this.PASSWORD_INPUT_TYPE === 'text' ? 'password' : 'text';
    this.PASSWORD_INPUT_ICON = this.PASSWORD_INPUT_ICON === 'eye-off' ? 'eye' : 'eye-off';
}

  validarPIN(pin: string, ev: any) {

    // tslint:disable-next-line: ban-types only-arrow-functions
    cordova.plugins.MyPlugin.testMichael('Validando certificado',function(response) {
      alert(response);
    // tslint:disable-next-line: only-arrow-functions
    }, function(error) {
      alert(error);
    });

  }
}
