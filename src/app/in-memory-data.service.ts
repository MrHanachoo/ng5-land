import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { imdbID: '1', title: 'The Shawshank Redemption' },
      { imdbID: '2', title: 'The Godfather' },
      { imdbID: '3', title: 'The Godfather: Part II' },
      { imdbID: '4', title: 'The Dark Knight' },
      { imdbID: '5', title: '12 Angry Men ' },
      { imdbID: '6', title: 'Schindler\'s List' },
      { imdbID: '7', title: 'Pulp Fiction' },
      { imdbID: '8', title: 'The Lord of the Rings: The Return of the King' },
      { imdbID: '9', title: 'The Good, the Bad and the Ugly' },
      { imdbID: '10', title: 'Fight Club' }
    ];
    return {movies};
  }
}
