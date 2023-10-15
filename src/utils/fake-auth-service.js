export class FakeAuthService {
  static logIn() {
    localStorage.setItem('is_logged_in', 'true');
  }

  static logOut() {
    localStorage.setItem('is_logged_in', 'false');
  }

  static isLoggedIn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localStorage.getItem('is_logged_in') === 'true');
      }, 2000);
    });
  }
}
