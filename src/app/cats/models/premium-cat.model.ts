import { Cat } from './cat.model';

export class PremiumCat extends Cat {
  public isAdopted: boolean = false;
  public adoptionFee: number = 0.0;

  public constructor(source: Partial<PremiumCat> | undefined = undefined) {
    super(source);

    Object.assign(this, source);
  }
}
