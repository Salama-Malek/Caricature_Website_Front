import { Artist } from "./artists";
import { Author } from "./author";

export interface Character {
    _id: string;
    name: string;
    image: string;
    author: Author;
    artist: Artist; 
  }
  