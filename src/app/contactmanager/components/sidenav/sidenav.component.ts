import { Component, OnInit } from '@angular/core';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  smallWidthBreakpoint: boolean;
  users: Observable<User[]>;

  constructor(public breakpointObserver: BreakpointObserver, private userService:UserService) { }

  ngOnInit() {
    // make layout responsive
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 500px or over!');
          this.smallWidthBreakpoint = false;
        } else {
          console.log('Viewport is getting smaller!');
          this.smallWidthBreakpoint = true;
        }
      });
      // Display user list from the internal store
      this.users = this.userService.users;
      this.userService.LoadAll();
      //debug code
      this.users.subscribe(data => {
        console.log(data);
      })

  }

  isScreenSmall(): boolean {
    return this.smallWidthBreakpoint;
  }

}
