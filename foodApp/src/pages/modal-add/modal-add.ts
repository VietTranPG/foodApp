import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the ModalAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-add',
  templateUrl: 'modal-add.html',
})
export class ModalAddPage {
  product: ProductModel = {} as ProductModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  takePicture() {

  }
  addProduct(){
    firebase.firestore().collection("products").add({
      name:this.product.name,
      price:this.product.price,
      description:this.product.description,
      created:firebase.firestore.FieldValue.serverTimestamp(),
      owner:firebase.auth().currentUser.uid,
      owner_name:firebase.auth().currentUser.displayName
    }).then(doc=>{

    }).catch(err=>{
      console.log(err)
    })
  }
} 
