import { Component, OnInit } from '@angular/core';

import { Consent } from '../models/Consent';
import { ConsentService } from '../services/consent/consent.service';

const ConsentsPerPage = 2;
const DisplayingPagesCount = 4;

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  pageConsents: Consent[] = [];
  pager: any = {};

  constructor(public consentService: ConsentService) {}

  ngOnInit() {
    this.consentService.getConsents()
      .subscribe(() => this.setPage(1));
  }

  formatAgreements(agreements) {
    return agreements
      .filter(agreement => agreement.selected)
      .map(agreement => agreement.text)
      .join(', ');
  }

  setPage(currentPage) {
    let consents = this.consentService.consents;

    this.pager = {
      currentPage,
      totalPages: Math.ceil(consents.length / ConsentsPerPage),
      pages: Array.from(Array(4).keys()).map(val => currentPage + val)
    };

    let endPage = Math.min(currentPage + DisplayingPagesCount, this.pager.totalPages);
    let startPage = Math.max(1, endPage - DisplayingPagesCount);
    this.pager.pages = Array.from(Array(endPage - startPage + 1).keys()).map(val => startPage + val);

    let startIndex = (this.pager.currentPage - 1) * ConsentsPerPage;
    this.pageConsents = consents.slice(startIndex, startIndex + ConsentsPerPage);
    this.pageConsents.forEach(consent => consent.selectedAgreements = consent.agreements.filter(agreement => agreement.selected));
  }
}
