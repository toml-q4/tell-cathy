import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NoteService } from "app/note.service";

@Injectable()
export class OneGateGuard implements CanActivate {

  constructor(private router: Router, private noteService: NoteService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.noteService.note) {
      return true;
    }
    else {
      this.router.navigate(['/pagenotgound']);
      return false;
    }
  }
}
