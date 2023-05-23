import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/features/Interfaces/artists';
import { ArtistListService } from 'src/app/features/Services/artist-list/artist-list.service';

@Component({
  selector: 'app-artist-management',
  templateUrl: './artist-management.component.html',
  styleUrls: ['./artist-management.component.css']
})
export class ArtistManagementComponent {
  artists:Artist[]=[];

  constructor(private router: Router,private _ArtistListService:ArtistListService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.GetArtists();
  }
  GetArtists(): void {
    this._ArtistListService.getArtists()
      .subscribe(artists => this.artists = artists);
  }
  DeleteArtists(id:string): void {
    this._ArtistListService.deleteArtist(id).subscribe(()=>{
      console.log("deleted successfully");

      this.router.navigate(['/artists']); // Replace 'artists' with the appropriate route path

    })
  }

 

}
