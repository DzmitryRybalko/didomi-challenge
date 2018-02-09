import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsComponent } from './consents.component';
import { ConsentService } from '../services/consent/consent.service';

describe('ConsentsComponent', () => {
  let component: ConsentsComponent;
  let fixture: ComponentFixture<ConsentsComponent>;
  let consentServiceStub;

  beforeEach(async(() => {
    consentServiceStub = {
      consents: [],
    };

    TestBed.configureTestingModule({
      declarations: [ ConsentsComponent ],
      providers: [ {provide: ConsentService, useValue: consentServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
