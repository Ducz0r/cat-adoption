import { BaseAdapter } from '../../../base/api/adapters';
import { PremiumCat } from '../../models';
import { PremiumCatDto } from '../dtos';
import { PremiumCatAdapter } from './premium-cat.adapter';

export class PremiumCatsAdapter extends BaseAdapter<PremiumCat[], PremiumCatDto[]> {
  private premiumCatAdapter: PremiumCatAdapter = new PremiumCatAdapter();

  public override toModel(apiModel: PremiumCatDto[]) {
    return apiModel.map((premiumCatDto: PremiumCatDto) => this.premiumCatAdapter.toModel(premiumCatDto));
  }
}
