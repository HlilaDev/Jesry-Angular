import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(user: any) {
    return this.http.post(API_URLS.auth.login, user).pipe(
      tap((response: any) => {
        const token = response;      
        this.setTokenInCookie(token);
      })
    );
  }

  register(newUser: any) {
    return this.http.post(API_URLS.auth.register, newUser);
  }

  setTokenInCookie(token: string): void {
    const cookieOptions: CookieOptions = {
      domain: 'localhost', // Change this to your domain in production
      path: '/',
      secure: false,
      sameSite: 'Lax'
    };
    this.cookieService.set('authToken', token, cookieOptions);
  }

  getTokenFromCookie(): string {
    return this.cookieService.get('authToken');
  }

  removeTokenFromCookie(): void {
    this.cookieService.delete('authToken');
  }

  getHeaders(): HttpHeaders {
    const token = this.getTokenFromCookie();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getUserIDFromToken(): string {
    const token = this.getTokenFromCookie();
    const decodedToken: any = this.jwtHelper.decodeToken(token);
    return decodedToken._id;
  }

  getUserRoleFromToken(): string {
    const token = this.getTokenFromCookie();
    const decodedToken: any = this.jwtHelper.decodeToken(token);
    return decodedToken.role;
  }

  isTokenExpired(): boolean {
    const token = this.getTokenFromCookie();
    return this.jwtHelper.isTokenExpired(token);
  }

}