import { Component, OnInit } from '@angular/core';
// import { Caricature } from '../models/caricature.model';
// import { CaricatureService } from '../services/caricature.service';
import { ToastrService } from 'ngx-toastr';
// import { Charactert } from '../models/Character.model';
@Component({
  selector: 'app-caricature-management',
  templateUrl: './caricature-management.component.html',
  styleUrls: ['./caricature-management.component.css'],
})
export class CaricatureManagementComponent implements OnInit {
  // caricatures!: Caricature[];
  caricatureAuthorName!: string;
  caricatureArtistName!: string;

  constructor(
    // private caricatureService: CaricatureService,
    // private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.caricatureService.getCaricatures().subscribe(
    //   (caricatures: Caricature[]) => {
    //     this.caricatures = caricatures;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  // deleteCaricature(caricature: Caricature) {
  //   if (
  //     confirm(
  //       `Are you sure you want to delete the caricature "${caricature.title}"?`
  //     )
  //   ) {
  //     this.caricatureService.deleteCaricature(caricature.id).subscribe(
  //       () => {
  //         this.caricatures = this.caricatures.filter(
  //           (c) => c.id !== caricature.id
  //         );
  //         this.toastr.success(
  //           `The caricature "${caricature.title}" has been deleted successfully.`
  //         );
  //       },
  //       (error) => {
  //         console.log(error);
  //         this.toastr.error(
  //           `An error occurred while deleting the caricature "${caricature.title}".`
  //         );
  //       }
  //     );
  //   }
  // }
}
