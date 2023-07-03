import { Author } from 'src/app/features/Interfaces/author';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/features/Interfaces/character';
import { CharacterService } from '../services/character.service';
import { Artist } from 'src/app/features/Interfaces/artists';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author/author.service';
import { ArtistService } from '../services/artist.service'; 
@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css'],
})
export class CharacterManagementComponent implements OnInit {
  characters: Character[] = [];
  displayEditModal: boolean = false;
  displaySuccessModal: boolean = false;
  displayAddCharacterModal: boolean = false;

  authors: Author[] = [];
  artists: Artist[] = [];

  editedCharacter: Character = {
    _id: '',
    name: '',
    image: '',
    author: {} as Author,
    artist: {} as Artist,
  };

  newCharacter: Character = {
    _id: '',
    name: '',
    image: '',
    author: {} as Author,
    artist: {} as Artist,
  };

  constructor(
    private characterService: CharacterService,
    private http: HttpClient, private ArtistService : ArtistService, private _AuthorService : AuthorService,
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.fetchAuthors();
    this.fetchArtists();
  }

  fetchAuthors(): void {
    this._AuthorService.getAuthors().subscribe(
      (authors: Author[]) => {
        this.authors = authors;
        console.log(authors);
        
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetching authors:', error);
      }
    );
  }

  fetchArtists(): void {
    this.ArtistService.getArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
        console.log(artists);
        
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetching artists:', error);
      }
    );
  }

  onImageSelected(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        this.editedCharacter.image = imageDataUrl;
        this.newCharacter.image = imageDataUrl;
      };
      reader.readAsDataURL(file);
    }
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (characters: Character[]) => {
        this.characters = characters;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(character: Character): void {
    this.editedCharacter = { ...character };
    this.displayEditModal = true;
  }

  cancelEditing(): void {
    this.editedCharacter = {
      _id: '',
      name: '',
      image: '',
      author: {} as Author,
      artist: {} as Artist,
    };
    this.displayEditModal = false;
  }

  saveCharacterChanges(): void {
    if (this.editedCharacter._id) {
      this.characterService
        .updateCharacter(this.editedCharacter._id, this.editedCharacter)
        .subscribe(
          (response: Character) => {
            console.log(response);
            this.loadCharacters();
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
    }
    this.closeEditModal();
  }

  deleteCharacter(characterId: string): void {
    this.characterService.deleteCharacter(characterId).subscribe(
      () => {
        console.log(`Character with ID ${characterId} deleted.`);
        this.loadCharacters();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  addCharacter(addCharacterForm: NgForm): void {
    console.log('Add button clicked');
    if (addCharacterForm.valid) {
      const formData = new FormData();
      formData.append('name', this.newCharacter?.name);
      formData.append('image', this.newCharacter.image);
      formData.append('author', this.newCharacter.author._id);
      formData.append('artist', this.newCharacter.artist._id);
  
      this.characterService.createCharacter(formData).subscribe(
        (response: Character) => {
          console.log(response);
          this.newCharacter = {
            _id: '',
            name: '',
            image: '',
            author: {} as Author,
            artist: {} as Artist,
          };
          this.loadCharacters();
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

  openAddCharacterModal(): void {
    this.displayAddCharacterModal = true;
  }

  closeAddCharacterModal(): void {
    this.displayAddCharacterModal = false;
  }
}
