import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ProfileService } from '../../Services/profile/profile.service';
import { Caricature } from '../../Interfaces/caricature';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  caricatures: Caricature[] = [];
  user_id!: string;

  constructor(private _Profile: ProfileService,
    private _AuthService: AuthenticationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCaricatures();
  }

  getCaricatures(): void {
    this._AuthService.currentLogUser.subscribe({
      next: (res: any) => {
        this.user_id = res.user_id;
      }
    })


    this._Profile.getCaricatures(this.user_id)
      .subscribe((caricatures: any) => {
        console.log(caricatures);
        this.caricatures = caricatures;

      });
  }

}
