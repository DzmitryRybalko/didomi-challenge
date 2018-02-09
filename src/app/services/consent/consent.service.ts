import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Consent } from '../../models/Consent';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ConsentService {
  consents: Consent[] = [];

  constructor(private http: HttpClient) {}

  getConsents() {
    return this.http.get('/consents')
      .pipe(
        tap<Consent[]>(consents => {
          this.consents = consents;
        })
      );
  }

  addConsent(consent: Consent) {
    return this.http.post('consent', consent);
  }
}
