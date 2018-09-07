
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(private toastCtrl: ToastController) {
    console.log('Hello CommonProvider Provider');
  } 
  presentToast(mess) {
    let toast = this.toastCtrl.create({
      message: mess,
      duration: 3000,
      position: 'top'
    });  
    toast.present();
  }
}
