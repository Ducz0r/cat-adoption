import { Inject, inject } from '@angular/core';
import { UserRepository } from '../data';
import { User } from '../models';

@Inject({ providedIn: 'root'})
export class UserService {
  private userRepository: UserRepository = inject(UserRepository);

  public isUserSignedIn(): boolean {
    return this.userRepository.get() !== null;
  }

  public getCurrentUser(): User | null {
    return this.userRepository.get();
  }

  public signIn(email: string, password: string): boolean {
    // Cannot sign in if user is already signed in
    if (this.isUserSignedIn()) {
      throw new Error('User is already signed in.');
    }

    // Temporary implementation - any password is ok
    const newUser: User = new User({
      id: 1,
      email,
      name: 'User'
    });
    this.userRepository.set(newUser);

    return true;
  }

  public signOut(): void {
    if (!this.isUserSignedIn()) {
      throw new Error('User is not signed in.');
    }

    this.userRepository.set(null);
  }
}
