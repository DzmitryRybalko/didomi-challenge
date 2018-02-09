import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GiveConsentComponent }   from './give-consent/give-consent.component';
import { ConsentsComponent } from './consents/consents.component';

const routes: Routes = [
  { path: 'give-consent', component: GiveConsentComponent },
  { path: 'consents', component: ConsentsComponent },
  { path: '**', redirectTo: '/give-consent' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
