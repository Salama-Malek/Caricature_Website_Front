import { Component } from '@angular/core';
interface Caricature {
  name: string; //no name
  bio: string;
  image: string;
  favorite: boolean;
}


/*
        character: 'Naruto Uzumaki',
        author: 'Masashi Kishimoto',
        artist: 'Masashi Kishimoto',
        description: 'The main character of the Naruto series.', //no description
        image: 'https://i.imgur.com/6dNpTJw.png'
        favorite: 

*/
@Component({
  selector: 'app-caricature-gallery',
  templateUrl: './caricature-gallery.component.html',
  styleUrls: ['./caricature-gallery.component.css']
})
export class CaricatureGalleryComponent {
  caricatures: Caricature[] = [
    {
      name: 'Caricature 1',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../../../../assets/caricatures/1.jpg',
      favorite: false
    },
    {
      name: 'Caricature 2',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../../../assets/caricatures/2.jpg',
      favorite: false
    },
    {
      name: 'Caricature 3',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '../../../../assets/caricatures/3.jpg',
      favorite: false
    },
    {
      name: 'Caricature 4',
      bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '../../../../assets/caricatures/4.jpg',
      favorite: false
    }
  ];

  toggleFavorite(caricature: Caricature): void {
    caricature.favorite = !caricature.favorite;
  }
}
