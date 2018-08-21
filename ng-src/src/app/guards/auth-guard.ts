import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.loggedIn()) {
            return true
        } else {
            this.router.navigate(['/login'])
            return false
        }
    }
}
