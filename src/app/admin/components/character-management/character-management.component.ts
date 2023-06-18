import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/features/Interfaces/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css'],
})
export class CharacterManagementComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;
  newCharacter: Character = {
    _id: '',
    name: '',
    image: '',
    author: { _id: '', name: '', image: '', birthDate: new Date(), bio: '', favourite: false },
    artist: { _id: '', name: '', image: '', birthDate: new Date(), bio: '', favourite: false },
  };

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  selectCharacter(character: Character): void {
    this.selectedCharacter = character;
  }

  createCharacter(): void {
    this.characterService.createCharacter(this.newCharacter).subscribe((character) => {
      this.characters.push(character);
      this.newCharacter = {
        _id: '',
        name: '',
        image: '',
        author: { _id: '', name: '', image: '', birthDate: new Date(), bio: '', favourite: false },
        artist: { _id: '', name: '', image: '', birthDate: new Date(), bio: '', favourite: false },
      };
    });
  }

  updateCharacter(): void {
    if (this.selectedCharacter) {
      this.characterService.updateCharacter(this.selectedCharacter._id, this.selectedCharacter).subscribe((character) => {
        const index = this.characters.findIndex((c) => c._id === character._id);
        if (index !== -1) {
          this.characters[index] = character;
        }
      });
    }
  }

  deleteCharacter(): void {
    if (this.selectedCharacter) {
      this.characterService.deleteCharacter(this.selectedCharacter._id).subscribe(() => {
        this.characters = this.characters.filter((c) => c._id !== this.selectedCharacter?._id);
        this.selectedCharacter = null;
      });
    }
  }
}
