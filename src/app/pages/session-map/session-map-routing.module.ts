import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionMapPage } from './session-map';

const routes: Routes = [
  {
    path: '',
    component: SessionMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionMapPageRoutingModule { }
