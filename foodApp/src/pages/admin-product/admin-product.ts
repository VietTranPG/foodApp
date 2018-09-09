import { ModalAddPage } from './../modal-add/modal-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the AdminProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-product',
  templateUrl: 'admin-product.html',
})
export class AdminProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProductPage');
  }
  openModalAdd(){
    this.modalCtrl.create(ModalAddPage).present();
  }
}
