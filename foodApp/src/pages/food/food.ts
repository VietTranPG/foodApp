import { SharedData } from './../../providers/shared/SharedData';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private sharedData : SharedData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');

    console.log(firebase.auth().currentUser)
    this.sharedData.userInfo.subscribe((info)=>{
      console.log(info);
    })
  }

} 
