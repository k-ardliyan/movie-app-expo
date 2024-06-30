import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Movie } from '@/types/Movie';
// import { addFavorite } from '@/utils/storage';
import { useFavoriteMovies } from '@/hooks/useFavoriteMovies';
import { RootStackParamList } from '@/types/Navigation';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { addFavorite } = useFavoriteMovies();

  return (
    <View style={{ margin: 16 }}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{ width: 100, height: 150 }}
      />
      <Text>{movie.title}</Text>
      <Text>{movie.genre_ids.join(', ')}</Text>
      <Text>{movie.vote_average}</Text>
      <Button title="View Details" onPress={() => navigation.navigate('MovieDetail', { movie })} />
      <Button title="Add to Favorites" onPress={() => addFavorite(movie)} />
    </View>
  );
};

export default MovieCard;
