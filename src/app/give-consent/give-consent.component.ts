import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Consent } from '../models/Consent';

import agreements from './agreements';
import { ConsentService } from '../services/consent/consent.service';


@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
  someSelected = false;
  consent = new Consent ('', '', agreements);

  constructor(private router: Router, public consentService: ConsentService) {}

  ngOnInit() {
    this.calculateSomeSelected();
  }

  calculateSomeSelected() {
    this.someSelected = this.consent.agreements.some(agreement => agreement.selected);
  }

  onSubmit() {
    this.consentService.addConsent(this.consent)
      .subscribe(() => {
        this.router.navigate(['consents']);
      });
  }
}
