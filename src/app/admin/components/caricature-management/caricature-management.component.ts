import { Caricature } from './../../../features/Interfaces/caricature';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/features/Interfaces/author';
import { Artist } from 'src/app/features/Interfaces/artists';
import { Character } from 'src/app/features/Interfaces/character';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CharacterService } from '../services/character.service';
import { ArtistService } from '../services/artist.service';
import { AuthorService } from '../services/author/author.service';
import { CaricatureService } from '../services/caricature.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caricature-management',
  templateUrl: './caricature-management.component.html',
  styleUrls: ['./caricature-management.component.css'],
})
export class CaricatureManagementComponent implements OnInit {
  caricatures: Caricature[] = [];
  characters: Character[] = [];
  authors: Author[] = [];
  artists: Artist[] = [];
  displayEditModal: boolean = false;
  displaySuccessModal: boolean = false;
  displayAddCharacterModal: boolean = false;

  editedCaricature: Caricature = {
    _id: '',
    image: '',
    description: '',
    favourite: false,
    authorName: {} as Author,
    artistName: {} as Artist,
    characterName: {} as Character,
  }

  newCaricature: Caricature = {
    _id: '',
    image: '',
    description: '',
    favourite: false,
    authorName: {} as Author,
    artistName: {} as Artist,
    characterName: {} as Character,
  };

  constructor(
    private _CaricatureService: CaricatureService,
    private toastr: ToastrService,
    private _CharacterService: CharacterService,
    private http: HttpClient, private _ArtistService : ArtistService, private _AuthorService : AuthorService,
  
  ) { }

  ngOnInit(): void {
    this.loadCaricatures();
    this.fetchAuthors();
    this.fetchArtists();
    this.fetchCharacters();
  }

  fetchAuthors(): void {
    this._AuthorService.getAuthors().subscribe(
      (authors: Author[]) => {
        this.authors = authors;
        // console.log(authors);
        
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetching authors:', error);
      }
    );
  }

  fetchArtists(): void {
    this._ArtistService.getArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
        
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetching artists:', error);
      }
    );
  }
  fetchCharacters(): void {
    this._CharacterService.getCharacters().subscribe(
      (characters: Character[]) => {
        this.characters = characters;
        
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetching characters:', error);
      }
    );
  }

  


  onImageSelected(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        this.editedCaricature.image = imageDataUrl;
        this.newCaricature.image = imageDataUrl;
      };
      reader.readAsDataURL(file);
    }
  }
 
  loadCaricatures(): void {
    this._CaricatureService.getCaricatures().subscribe(
      
      (caricatures: Caricature[]) => {
        this.caricatures = caricatures;
      console.log(this.caricatures);

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  startEditing(caricature: Caricature): void {
    this.editedCaricature = { ...caricature };
    this.displayEditModal = true;
  }

  cancelEditing(): void {
    this.editedCaricature = {
      _id: '',
    image: '',
    description: '',
    favourite: false,
    authorName: {} as Author,
    artistName: {} as Artist,
    characterName: {} as Character,
    };
    this.displayEditModal = false;
  }

  saveCharacterChanges(): void {
    if (this.editedCaricature._id) {
      this._CaricatureService
        .updateCaricature(this.editedCaricature._id, this.editedCaricature)
        .subscribe(
          (response: Caricature) => {
            console.log(response);
            this.loadCaricatures();
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
    }
    this.closeEditModal();
  }

  // 

  deleteCaricature(CaricatureId: string): void {
    this._CaricatureService.deleteCaricature(CaricatureId).subscribe(
      () => {
        console.log(`Caricature with ID ${CaricatureId} deleted.`);
        this.loadCaricatures();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  addCaricature(addCaricatureForm: NgForm): void {
    console.log('Add button clicked');
    if (addCaricatureForm.valid) {
      
      const formData = new FormData();
      formData.append('description', this.newCaricature.description);
      formData.append('image', this.newCaricature.image);
      formData.append('favourite', this.newCaricature.favourite.toString());
      
      formData.append('authorName', this.newCaricature.authorName._id);
      formData.append('artistName', this.newCaricature.artistName._id);
      formData.append('characterName', this.newCaricature.characterName._id);
  
      this._CaricatureService.createCaricature(formData).subscribe(
        (response: Caricature) => {
          this.newCaricature = {
            _id: '',
            image: '',
            description: '',
            favourite: false,
            authorName: {} as Author,
            artistName: {} as Artist,
            characterName: {} as Character,
          };
          this.loadCaricatures();
          this.displaySuccessModal = true;
          this.displayAddCharacterModal = false;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }
  
  closeSuccessModal(): void {
    this.displaySuccessModal = false;
  }

  closeEditModal(): void {
    this.displayEditModal = false;
    this.cancelEditing();
  }

  openAddCaricatureModal(): void {
    this.displayAddCharacterModal = true;
  }

  closeAddCaricatureModal(): void {
    this.displayAddCharacterModal = false;
  }



}
