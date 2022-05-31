import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.isAuthenticated()) {
            this.router.navigate(['login'])
            return false
        }
        return true
    }

    isAuthenticated(): boolean {
        const values = JSON.parse(localStorage.getItem("userLog") || '{}');
        if (values) {
            return true
        } else
            return false
    }
}
