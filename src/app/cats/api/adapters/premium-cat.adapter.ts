import { BaseAdapter } from '../../../base/api/adapters';
import { Cat, PremiumCat } from '../../models';
import { PremiumCatDto } from '../dtos';
import { CatAdapter } from './cat.adapter';

export class PremiumCatAdapter extends BaseAdapter<PremiumCat, PremiumCatDto> {
  private readonly catAdapter: CatAdapter = new CatAdapter();

  public override toModel(apiModel: PremiumCatDto) {
    const cat: Cat = this.catAdapter.toModel(apiModel);

    return new PremiumCat({
      ...cat,
      isAdopted: apiModel.is_adopted,
      adoptionFee: parseFloat(apiModel.adoption_fee)
    });
  }

}
