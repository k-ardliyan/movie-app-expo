import { Movie } from './Movie';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorite: undefined;
  MovieDetail: { movie: Movie };
};
