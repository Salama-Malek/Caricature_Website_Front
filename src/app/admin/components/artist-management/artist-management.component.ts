import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/features/Interfaces/artists';
import { ArtistService } from '../services/artist.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-artist-management',
  templateUrl: './artist-management.component.html',
  styleUrls: ['./artist-management.component.css']
})
export class ArtistManagementComponent implements OnInit {
  artists: Artist[] = [];

  editedArtist: Artist = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date,
    bio: '',
    favourite: false
  };

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadArtistById(id: string): void {
    this.artistService.getArtistById(id).subscribe(
      (artist: Artist) => {
        console.log(artist);
        // Handle the fetched artist data as needed
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(artist: Artist): void {
    this.editedArtist = { ...artist }; // Create a copy of the artist to avoid modifying the original
  }

  cancelEditing(): void {
    this.editedArtist = {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date,
      bio: '',
      favourite: false
    };
  }

  saveArtistChanges(): void {
    if (this.editedArtist) {
      this.artistService.updateArtist(this.editedArtist._id, this.editedArtist).subscribe(
        (response: Artist) => {
          console.log(response);
          this.editedArtist = {
            _id: '',
            name: '',
            image: '',
            birthDate: new Date,
            bio: '',
            favourite: false
          };
          this.loadArtists();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  deleteArtist(artist: Artist): void {
    this.artistService.deleteArtist(artist._id).subscribe(
      () => {
        console.log(`Artist with ID ${artist._id} deleted.`);
        this.loadArtists();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
