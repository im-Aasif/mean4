import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      data => {
        this.user = data.user;
      },
      err => {
        // console.log(err);
        this.router.navigate(['login'])  
      }
    )
  }
}
