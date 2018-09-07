import { FoodPage } from './../food/food';
import { CommonProvider } from './../../providers/common/common';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  email: string;
  password: string;
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private common:CommonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  gotoSignIn() {
    this.navCtrl.pop();
  }
  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        let newUser:firebase.User = result.user;
        newUser.updateProfile({
          displayName:this.name,
          photoURL:""
        })
        console.log(result);
        this.common.presentToast("Tạo tài khoản thành công");
        this.navCtrl.setRoot(FoodPage);
      }).catch((err) => {
        console.log(err);
        this.common.presentToast(err.message)
      })
  }
}