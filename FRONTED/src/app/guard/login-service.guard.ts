import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceGuard implements CanActivate {


  constructor(
    private tokenService: TokenService,
    private snackBar: MatSnackBar,
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.usuarioLogueado) {
      return true;
    } else {
      this.tokenService.logout();
      this.fnMensajeError();
      return false;
    }
  }

  public fnMensajeError() {
    this.snackBar.open('Todavía no se inicia sesión.', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
