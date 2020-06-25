import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var cordova:any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  CARGANDO = 'assets/icon/grabando.gif';
  IS_LOADING = true;
  BTN_CONECTAR ='Conectar';
  BTN_CONECTAR_DISABLED = true;
  CONECTADO = false;
  INPUT_ESTADO ='Desconectado';

  constructor(public platform: Platform) {}

  ngOnInit() {

    this.platform.ready().then(() => {
      this.IS_LOADING = true;
      this.comprobarConexion().then(() => {
        this.IS_LOADING = false;
        this.BTN_CONECTAR_DISABLED = false;
      });
    });
  }

  comprobarConexion() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });
  }

  conectarDesconectar(ev: any) {

    this.IS_LOADING = true;
    this.BTN_CONECTAR_DISABLED = true;
      //this.comprobarConexion().then(() => {

     // tslint:disable-next-line: ban-types only-arrow-functions
     cordova.plugins.MyLectorPlugin.coolMethod('',function(response) {
      alert(response);
      console.log(response);
    // tslint:disable-next-line: only-arrow-functions
    }, function(error) {
      alert(error);
    });
    this.IS_LOADING = false;
    this.BTN_CONECTAR_DISABLED = false;

     // });

  }
}
