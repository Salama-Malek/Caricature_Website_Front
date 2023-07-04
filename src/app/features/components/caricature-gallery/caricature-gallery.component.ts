import { Component, OnInit } from '@angular/core';
import { Caricature } from '../../Interfaces/caricature';
import { CaricatureGalleryService } from '../../Services/caricature-gallery/caricature-gallery.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-caricature-gallery',
  templateUrl: './caricature-gallery.component.html',
  styleUrls: ['./caricature-gallery.component.css']
})
export class CaricatureGalleryComponent implements OnInit {
  caricatures: Caricature[] = [];
  user_id!: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private caricatureGalleryService: CaricatureGalleryService,
    private _AuthService: AuthenticationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCaricatures();
  }

  getCaricatures(): void {
    this.caricatureGalleryService.getCaricatures()
      .subscribe((caricatures: Caricature[]) => {
        this.caricatures = caricatures;
      });
  }


  openSnackBarForSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


  openSnackBarForError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


  toggleFavorite(caricature: Caricature): void {
    caricature.favourite = !caricature.favourite;
    const body = {
      react: caricature.favourite
    }

    this._AuthService.currentLogUser.subscribe({
      next: (res: any) => {
        this.user_id = res.user_id;
      }
    })

    this.caricatureGalleryService.changeUserFav(body, this.user_id, caricature._id).subscribe({
      next: (res) => {
        this.openSnackBarForSuccess(res.message, "Dismiss");
      },
      error: (err) => {
        this.openSnackBarForError(err.message, "Dismiss");
      }
    })
  }
}
