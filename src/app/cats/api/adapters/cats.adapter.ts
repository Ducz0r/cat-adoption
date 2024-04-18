import { BaseAdapter } from '../../../core/api/adapters';
import { Cat } from '../../models';
import { CatDto } from '../dtos';
import { CatAdapter } from '.';

export class CatsAdapter extends BaseAdapter<Cat[], CatDto[]> {
  private catAdapter: CatAdapter = new CatAdapter();

  public override toModel(apiModel: CatDto[]) {
    return apiModel.map((catDto: CatDto) => this.catAdapter.toModel(catDto));
  }
}
