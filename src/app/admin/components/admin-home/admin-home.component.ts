import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { CharacterService } from '../services/character.service';
import { ArtistService } from '../services/artist.service';
import { AuthorService } from '../services/author/author.service';
import { CaricatureService } from '../services/caricature.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  usersCount: number = 0;
  charactersCount: number = 0;
  caricaturesCount: number = 0;
  artistsCount: number = 0;
  authorsCount: number = 0;

  constructor(
    private _CaricatureService: CaricatureService,
    private _CharacterService: CharacterService,
    private _ArtistService : ArtistService,
    private _UserService : UserService,
    private _AuthorService : AuthorService,
  
  ) {}

  // Fetch all the entities and calculate the counts
  fetchData() {
    this._UserService.getAllUsers().subscribe(users => {
      this.usersCount = users.length - 1;
    });

    this._CharacterService.getCharacters().subscribe(characters => {
      this.charactersCount = characters.length;
    });
    this._CaricatureService.getCaricatures().subscribe(users => {
      this.caricaturesCount = users.length;
    });

    this._AuthorService.getAuthors().subscribe(characters => {
      this.authorsCount = characters.length;
    });
    this._ArtistService.getArtists().subscribe(characters => {
      this.artistsCount = characters.length;
    });
  }

  // Call this method when the component initializes or when you want to refresh the data
  ngOnInit() {
    this.fetchData();
  }
}
