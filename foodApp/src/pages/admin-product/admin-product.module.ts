import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProductPage } from './admin-product';

@NgModule({
  declarations: [
    AdminProductPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProductPage),
  ],
})
export class AdminProductPageModule {}
