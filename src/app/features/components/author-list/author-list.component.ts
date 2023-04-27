import { Component } from '@angular/core';
interface Author {
  name: string;
  bio: string;
  image: string;
  favorite: boolean;
}

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: Author[] = [
    {
      name: 'Author 1',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../../../../assets/caricatures/1.jpg',
      favorite: false
    },
    {
      name: 'Author 2',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '../../../../assets/caricatures/2.jpg',
      favorite: false
    },
    {
      name: 'Author 3',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '../../../../assets/caricatures/3.jpg',
      favorite: false
    },
    {
      name: 'Author 4',
      bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '../../../../assets/caricatures/4.jpg',
      favorite: false
    }
  ];

  toggleFavorite(author: Author): void {
    author.favorite = !author.favorite;
  }
}
