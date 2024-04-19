import { BaseAdapter } from '../../../core/api/adapters';
import { Cat } from '../../models';
import { CatDto } from '../dtos';

export class CatAdapter extends BaseAdapter<Cat, CatDto> {

  public override toModel(apiModel: CatDto) {
    return new Cat({
      ...apiModel,
      id: parseInt(apiModel.id, 10),
      listedAt: new Date(apiModel.listed_at),
      age: parseInt(apiModel.age, 10),
      contactName: apiModel.contact_name,
      contactPhone: apiModel.contact_phone
    });
  }

}
