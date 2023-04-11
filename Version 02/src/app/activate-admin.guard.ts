import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './Register.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateAdminGuard implements CanActivate {

  constructor(private RegService: RegisterService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.RegService.islogin()) {
      alert("You are not logged in as Administrator");
      this.router.navigate(["Login"], { queryParams: { retUrl: route.url } });
      return false;
    }
    return true;
  }

}
