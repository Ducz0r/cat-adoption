import { Injectable, inject } from '@angular/core';
import { UserRepository } from '../data';
import { User } from '../models';
import { Router } from '@angular/router';
import { LocalStorageHelper } from '../../helpers';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class UserService {
  private readonly localStorageUserKey: string = 'user';

  private router: Router = inject(Router);
  private userRepository: UserRepository = inject(UserRepository);

  public init(): void {
    // Set the current user in the repository from local storage
    // (if null, null will be set)
    this.userRepository.set(LocalStorageHelper.getItem<User>(this.localStorageUserKey));
  }

  public onUserChanged(): Observable<User | null> {
    return this.userRepository.onDataChanged();
  }

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

    // TODO: If signing in failed, error should be thrown

    // Temporary implementation - any password is ok, user is signed in
    const newUser: User = new User({
      id: 1,
      email,
      name: 'User',
      password
    });

    this.userRepository.set(newUser);
    LocalStorageHelper.setItem<User>(this.localStorageUserKey, newUser);

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
    LocalStorageHelper.removeItem(this.localStorageUserKey);

    this.redirectToRoot();
  }

  public getUserAuthData(): string | null {
    const user: User | null = this.getCurrentUser();
    if (user === null) {
      return null;
    }

    return btoa(`${user.email}:${user.password}`);
  }

  private redirectToRoot(): void {
    this.router.navigate(['/']);
  }
}
