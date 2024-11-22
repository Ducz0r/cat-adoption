export abstract class BaseAdapter<Model, ApiModel>
{
  public toModel(apiModel: ApiModel): Model {
    throw new Error('Not implemented.');
  }

  public toApiModel(model: Model): ApiModel {
    throw new Error('Not implemented.');
  }
}
