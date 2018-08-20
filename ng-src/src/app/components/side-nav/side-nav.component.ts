import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [MediaMatcher]
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.logOut();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }
}
