import { Inject, inject } from '@angular/core';
import { UserRepository } from '../data';
import { User } from '../models';
import { Router } from '@angular/router';

@Inject({ providedIn: 'root'})
export class UserService {
  private router: Router = inject(Router);
  private userRepository: UserRepository = inject(UserRepository);

  public isUserSignedIn(): boolean {
    return this.userRepository.get() !== null;
  }

  public getCurrentUser(): User | null {
    return this.userRepository.get();
  }

  /**
   * Sign the current user in.
   * @param email User email.
   * @param password User password.
   * @throws Error If sign in fails.
   */
  public signIn(email: string, password: string): void {
    // Cannot sign in if user is already signed in
    if (this.isUserSignedIn()) {
      throw new Error('User is already signed in.');
    }

    // If signing in failed, error should be thrown

    // Temporary implementation - any password is ok, user is signed in
    const newUser: User = new User({
      id: 1,
      email,
      name: 'User'
    });
    this.userRepository.set(newUser);

    this.redirectToRoot();
  }

  /**
   * Sign the current user out. If sign out fails, error is thrown.
   * @throws Error If sign out fails.
   */
  public signOut(): void {
    if (!this.isUserSignedIn()) {
      throw new Error('User is not signed in.');
    }

    this.userRepository.set(null);

    this.redirectToRoot();
  }

  private redirectToRoot(): void {
    this.router.navigate(['/']);
  }
}
