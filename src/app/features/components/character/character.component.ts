import { Component, OnInit } from '@angular/core';
import { Charactert } from './../../../admin/components/models/Character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters!: Charactert[];

  constructor() { }

  ngOnInit(): void {
    // Replace with your API call to get characters
    this.characters = [
      {
        id: 1,
        name: 'Naruto Uzumaki',
        author: 'Masashi Kishimoto',
        artist: 'Masashi Kishimoto',
        description: 'The main character of the Naruto series.', //no description
        image: '../../../../assets/characters/1.jpg'
      },
      {
        id: 2,
        name: 'Monkey D. Luffy',
        author: 'Eiichiro Oda',
        artist: 'Eiichiro Oda',
        description: 'The main character of the One Piece series.',
        image: '../../../../assets/characters/2.jpg'
      },
      {
        id: 3,
        name: 'Goku',
        author: 'Akira Toriyama',
        artist: 'Akira Toriyama',
        description: 'The main character of the Dragon Ball series.',
        image: '../../../../assets/characters/3.jpg'
      },
      {
        id: 4,
        name: 'Goku',
        author: 'Akira Toriyama',
        artist: 'Akira Toriyama',
        description: 'The main character of the Dragon Ball series.',
        image: '../../../../assets/characters/4.jpg'
      },
      {
        id: 5,
        name: 'Goku',
        author: 'Akira Toriyama',
        artist: 'Akira Toriyama',
        description: 'The main character of the Dragon Ball series.',
        image: '../../../../assets/characters/5.jpg'
      },
      {
        id: 6,
        name: 'Goku',
        author: 'Akira Toriyama',
        artist: 'Akira Toriyama',
        description: 'The main character of the Dragon Ball series.',
        image: '../../../../assets/characters/6.jpg'
      }
    ];
  }
}
