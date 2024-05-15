import { CookieOptions, CookieService } from 'ngx-cookie-service';

export function setAuthToken(cookieService: CookieService, token: string) {
  const cookieOptions: CookieOptions = {
    domain: 'localhost', // Change this to your domain in production
    path: '/',           // Set the path to '/' for global accessibility
    secure: false,       // Set to true if using HTTPS
    sameSite: 'Lax'      // Adjust based on your needs
  };
  cookieService.set('authToken', token, cookieOptions);
}

export function getAuthToken(cookieService: CookieService): string {
  return cookieService.get('authToken');
}

export function removeAuthToken(cookieService: CookieService): void {
  cookieService.delete('authToken');
}