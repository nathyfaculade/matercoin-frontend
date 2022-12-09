import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { acesso, ETipoUsuario } from "../app.component";

@Injectable({providedIn: 'root'})
export class AuthGuardProfessor implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return acesso.perfil == ETipoUsuario.PROFESSOR || acesso.perfil == ETipoUsuario.COORDENADOR;
    }

}

@Injectable({providedIn: 'root'})
export class AuthGuardAluno implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return acesso.perfil == ETipoUsuario.ALUNO || acesso.perfil == ETipoUsuario.PROFESSOR || acesso.perfil == ETipoUsuario.COORDENADOR;
    }

}

@Injectable({providedIn: 'root'})
export class AuthGuardCoordenador implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return acesso.perfil == ETipoUsuario.COORDENADOR
    }

}
