import { Component, OnInit } from '@angular/core';
import { Charactert } from './../../../admin/components/models/Character.model';
import { Character } from '../../Interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  characters:Character[]=[];
}
