import { FormControl } from '@angular/forms';

export interface FormGroupModel {
  email: FormControl<string>;
  password: FormControl<string>;
}
