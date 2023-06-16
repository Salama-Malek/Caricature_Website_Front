import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/features/Interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  isLogged: boolean = false;
  isAdmin: boolean = false;
  user?: User;

  constructor(private _Authentication: AuthenticationService) {
    this._Authentication.currentLogUser.subscribe((response) => {
      if (this._Authentication.currentLogUser.getValue().email === "") {
        this.isLogged = false;
        // this.user = this._Authentication.currentLogUser.value;
      } else if (
        this._Authentication.currentLogUser.getValue().email !== "" &&
        this._Authentication.currentLogUser.getValue().is_admin === false
      ) {
        this.isLogged = true;
        this.isAdmin = false;
        this.user = this._Authentication.currentLogUser.value;
      } else {
        this.isLogged = true;
        this.isAdmin = true;
        this.user = this._Authentication.currentLogUser.value;
      }
    });

  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  logout() {
    this._Authentication.logout();
  }

}
