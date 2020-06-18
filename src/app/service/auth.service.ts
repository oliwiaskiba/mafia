import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Tokens } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ID = 'ID';
  private readonly LOGIN = 'LOGIN';
  private readonly USER_SESSION = 'USER_SESSION';

  constructor(private http: HttpClient) {}

  login(user: { login: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/user/login`, user)
      .pipe(
        tap(tokens => this.storeTokens(tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    const loggedUser = {
      id: localStorage.getItem(this.ID),
      login: localStorage.getItem(this.LOGIN)
    };

    return this.http.put<any>(`${config.apiUrl}/user/logout`, loggedUser)
      .pipe(
        tap(() => this.removeTokens()),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  get userSession() {
    return localStorage.getItem(this.USER_SESSION);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.ID, tokens.id.toString());
    localStorage.setItem(this.LOGIN, tokens.login);
    localStorage.setItem(this.USER_SESSION, tokens.userSession);
  }

  private removeTokens() {
    localStorage.removeItem(this.ID);
    localStorage.removeItem(this.LOGIN);
    localStorage.removeItem(this.USER_SESSION);
  }

  isLoggedIn() {
    return !!this.userSession;
  }

  getLogin() {
    return localStorage.getItem(this.LOGIN);
  }

  getID() {
    return localStorage.getItem(this.ID);
  }
}
