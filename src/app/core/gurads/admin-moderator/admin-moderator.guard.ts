import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const adminModeratorGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  try {   
      const userRole = auth.getUserRoleFromToken()

    if (userRole === 'admin' || userRole === 'moderator') {
      return true;
    } else {
      const router = inject(Router);
      router.navigate(['/dashboard']);
      return false;
    }
  } catch (error) {
    console.error('Error retrieving user role:', error);
    return false;
  }
};
