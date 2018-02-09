import { Consent } from '../models/Consent';
import { Agreement } from '../models/Agreement';

export default [
  new Consent('Bojack Hoserman', 'bojack@hoserman.com', [
    new Agreement('Receive newsteller', true),
    new Agreement('Be shown targeted ads', true),
  ]),
  new Consent('Princess Carolyn', 'princess@manager.com', [
    new Agreement('Receive newsteller', true),
  ]),
  new Consent('Alex Manison', 'alex.manison@gmail.com', [
    new Agreement('Receive newsteller', true),
    new Agreement('Be shown targeted ads', true),
    new Agreement('Contribute to anonymous visit statistics', true),
  ])
]