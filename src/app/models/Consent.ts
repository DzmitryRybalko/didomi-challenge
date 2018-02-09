import { Agreement } from './Agreement';

export class Consent {

  constructor(
    public name: string,
    public email: string,
    public agreements: Agreement[],
    public selectedAgreements? : Agreement[],
  ) {  }
}