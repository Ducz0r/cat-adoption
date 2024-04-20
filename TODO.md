## TODOs

- Update `UserRepository` so it will be based on observables
  - This will in-turn require modification of `UserService`, `BasicAuthInterceptor`
  - This will in-turn allow the `NavbarComponent` to use async pipes, and use the `OnPush` change detection
  - Both repositories will then be based on the same principle
- Add pagination & filtering options to URL, make them URL-parseable for copying of URLs
