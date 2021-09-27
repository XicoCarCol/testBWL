import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NAME_KEY = 'AuthName';
const ID_KEY = 'AuthId';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public roles: Array<string> = [];

  constructor(
    private router: Router
  ) { }


  public get usuarioLogueado(): boolean {
    const token = sessionStorage.getItem('AuthToken');
    return token != null;
  }


  public setValue(key: string, value: string) {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, value);
  }

  public getValue(key: string) {
    return sessionStorage.getItem(key);
  }

  public setAuthorities(value: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(value));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public getUsername() {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
