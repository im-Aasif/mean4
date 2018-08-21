import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // mobileQuery: MediaQueryList;
  // private _mobileQueryListener: () => void;
  // constructor(
  //   private _changeDetectorRef: ChangeDetectorRef,
  //   private media: MediaMatcher,
  //   public authService: AuthService,
  //   private flashMessage: FlashMessagesService,
  //   private router: Router
  // ) { 
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)')
  //   this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }

  // onLogOut() {
  //   this.authService.logOut();
  //   this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
  //   this.router.navigate(['/login']);
  //   return false;
  // }
}

