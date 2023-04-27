import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters!: Character[];

  constructor() { }

  ngOnInit(): void {
    // Replace with your API call to get characters
    this.characters = [
      {
        id: 1,
        name: 'Naruto Uzumaki',
        author: 'Masashi Kishimoto',
        artist: 'Masashi Kishimoto',
        description: 'The main character of the Naruto series.',
        image: 'https://i.imgur.com/6dNpTJw.png'
      },
      {
        id: 2,
        name: 'Monkey D. Luffy',
        author: 'Eiichiro Oda',
        artist: 'Eiichiro Oda',
        description: 'The main character of the One Piece series.',
        image: 'https://i.imgur.com/UhrnP5u.png'
      },
      {
        id: 3,
        name: 'Goku',
        author: 'Akira Toriyama',
        artist: 'Akira Toriyama',
        description: 'The main character of the Dragon Ball series.',
        image: 'https://i.imgur.com/3PSrkEh.png'
      }
    ];
  }
}
