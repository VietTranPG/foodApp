import { AdmintabPage } from './../admintab/admintab';
import { SharedData } from './../../providers/shared/SharedData';
import { FoodPage } from './../food/food';
import { CommonProvider } from './../../providers/common/common';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase, { firestore } from 'firebase'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private common: CommonProvider, private sharedData: SharedData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoSignUp() {
    this.navCtrl.push(SignupPage);
  }
  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        firebase.firestore().collection('user-role').where("uid", "==", data.user.uid).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let userRole = doc.data().role;
            let userInfo: UserInfo = {
              email: data.user.email,
              name: data.user.displayName,
              role: userRole
            }
            this.sharedData.setUserInfo(userInfo);
            userRole == 'admin' ? this.navCtrl.setRoot(AdmintabPage) : this.navCtrl.setRoot(FoodPage)
          });
        })

      }).catch(err => {
        this.common.presentToast(err.message)
      })
  }
}
