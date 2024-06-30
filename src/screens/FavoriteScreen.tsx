import React from 'react';
import { View, FlatList, Button } from 'react-native';
import MovieCard from '../components/MovieCard';
import { useFavoriteMovies } from '@/hooks/useFavoriteMovies';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type FavoriteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favorite'>;

const FavoriteScreen = () => {
  const { favoriteMovies, removeFavorite } = useFavoriteMovies();
  const navigation = useNavigation<FavoriteScreenNavigationProp>();

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId);
  };

  return (
    <View>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => (
          <View>
            <MovieCard movie={item} />
            <Button title="Remove from Favorites" onPress={() => handleRemoveFavorite(item.id)} />
            <Button
              title="View Details"
              onPress={() => navigation.navigate('MovieDetail', { movie: item })}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteScreen;
