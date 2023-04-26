// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-artist-list',
//   templateUrl: './artist-list.component.html',
//   styleUrls: ['./artist-list.component.css']
// })
// export class ArtistListComponent {
//   artists = [
//     {
//       name: 'John Doe',
//       image: 'https://via.placeholder.com/150',
//       bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       name: 'Jane Doe',
//       image: 'https://via.placeholder.com/150',
//       bio: 'Nulla facilisi. Curabitur venenatis dolor in erat vestibulum.'
//     },
//     {
//       name: 'Bob Smith',
//       image: 'https://via.placeholder.com/150',
//       bio: 'Etiam auctor aliquet libero ac scelerisque.'
//     }
//   ];

//   favoriteArtists: string[] = [];

//   toggleFavorite(artistName: string): void {
//     const index = this.favoriteArtists.indexOf(artistName);
//     if (index === -1) {
//       // Artist is not currently a favorite, so add to list
//       this.favoriteArtists.push(artistName);
//     } else {
//       // Artist is already a favorite, so remove from list
//       this.favoriteArtists.splice(index, 1);
//     }
//   }

//   isFavorite(artistName: string): boolean {
//     return this.favoriteArtists.includes(artistName);
//   }
// }

import { Component } from '@angular/core';

interface Artist {
  name: string;
  bio: string;
  image: string;
  favorite: boolean;
}

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  artists: Artist[] = [
    {
      name: 'Artist 1',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../../../../assets/caricatures/1.jpg',
      favorite: false
    },
    {
      name: 'Artist 2',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../../../assets/caricatures/2.jpg',
      favorite: false
    },
    {
      name: 'Artist 3',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '../../../../assets/caricatures/3.jpg',
      favorite: false
    },
    {
      name: 'Artist 4',
      bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '../../../../assets/caricatures/4.jpg',
      favorite: false
    }
  ];

  toggleFavorite(artist: Artist): void {
    artist.favorite = !artist.favorite;
  }
}


