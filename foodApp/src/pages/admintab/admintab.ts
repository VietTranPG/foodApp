import { AdminProductPage } from './../admin-product/admin-product';
import { FoodPage } from './../food/food';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmintabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admintab',
  templateUrl: 'admintab.html',
})
export class AdmintabPage {
  tab1Root = AdminProductPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmintabPage');
  }

}
