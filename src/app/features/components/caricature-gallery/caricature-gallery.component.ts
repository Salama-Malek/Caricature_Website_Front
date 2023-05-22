import { Component } from '@angular/core';
import { Caricature } from 'src/app/features/Interfaces/caricature';
import { CaricatureGalleryService } from '../../Services/caricature-gallery/caricature-gallery.service'; 
@Component({
  selector: 'app-caricature-gallery',
  templateUrl: './caricature-gallery.component.html',
  styleUrls: ['./caricature-gallery.component.css']
})
export class CaricatureGalleryComponent {
  caricatures:Caricature[]=[];


  constructor(private caricatureGalleryService: CaricatureGalleryService) { }

  ngOnInit(): void {
    this.getCaricatures();
    
  }

  getCaricatures(): void {
    this.caricatureGalleryService.getCaricatures()
      .subscribe(caricatures => this.caricatures = caricatures);
      console.log(this.caricatures);

  }


  toggleFavorite(caricature: Caricature): void {
    caricature.favourite = !caricature.favourite;
  }
}
