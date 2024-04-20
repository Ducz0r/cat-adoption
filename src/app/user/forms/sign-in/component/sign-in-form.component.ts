import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupModel } from '../models';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services';

@Component({
  selector: 'ca-user-forms-sign-in',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent {
  private readonly minPasswordLength = 3;

  private userService: UserService = inject(UserService);

  private signInResult: boolean | undefined = undefined;

  public signInForm!: FormGroup<FormGroupModel>;

  public get showError(): boolean {
    return this.signInResult === false;
  }

  public constructor() {
    this.initForm();
  }

  public onSubmit(): void {
    this.signInResult = undefined;

    if (this.signInForm.invalid) {
      // Display error message; should be done automatically
      this.signInResult = false;
      return;
    }

    // Attempt to sign in user
    this.signInResult = this.signIn(this.signInForm.value.email!, this.signInForm.value.password!);

    if (!this.signInResult) {
      // Display error message; should be done automatically
      return;
    }
  }

  private initForm(): void {
    this.signInForm = new FormGroup<FormGroupModel>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [ Validators.required, Validators.email ]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [ Validators.required, Validators.minLength(this.minPasswordLength)]
      })
    });
  }

  private signIn(email: string, password: string): boolean {
    let success: boolean = false;

    try {
      this.userService.signIn(email, password);
    } catch {
    }

    return success;
  }
}
