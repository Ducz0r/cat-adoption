import { CatDto } from './cat.dto';

export interface PremiumCatDto extends CatDto {
  is_adopted: boolean;
  adoption_fee: string;
}
