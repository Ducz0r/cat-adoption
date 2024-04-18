import { BaseAdapter } from '../../../core/api/adapters';
import { Cat } from '../../models';
import { CatDto } from '../dtos';

export class CatAdapter extends BaseAdapter<Cat, CatDto> {

  public override toModel(apiModel: CatDto) {
    return new Cat(apiModel);
  }

}
