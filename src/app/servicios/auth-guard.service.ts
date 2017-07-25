import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(){
    console.log("Bloqueado por el auth guard");
    return false;

  }

}
