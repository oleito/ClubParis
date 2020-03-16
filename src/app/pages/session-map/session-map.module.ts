import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionMapPage } from './session-map';
import { SessionMapPageRoutingModule } from './session-map-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SessionMapPageRoutingModule
  ],
  declarations: [
    SessionMapPage,
  ]
})
export class SessionMapModule { }
