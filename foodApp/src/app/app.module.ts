import { FoodPage } from './../pages/food/food';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import firebase from 'firebase';
import { CommonProvider } from '../providers/common/common';
var firebase_auth = {
  apiKey: "AIzaSyC5j9t6i0XCxdx6I5W8Id4MxfLxhwwsXEs",
  authDomain: "foodapp-90bf3.firebaseapp.com",
  databaseURL: "https://foodapp-90bf3.firebaseio.com",
  projectId: "foodapp-90bf3",
  storageBucket: "foodapp-90bf3.appspot.com",
  messagingSenderId: "814651090405"
}
firebase.initializeApp(firebase_auth);
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    FoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    FoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CommonProvider
  ]
})
export class AppModule { }
