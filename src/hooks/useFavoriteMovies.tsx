import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../types/Movie';

const FAVORITES_KEY = 'favorites';

export const useFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesData = await AsyncStorage.getItem(FAVORITES_KEY);
        if (favoritesData) {
          setFavoriteMovies(JSON.parse(favoritesData));
        }
      } catch (error) {
        console.error('Failed to load favorites', error);
      }
    };

    loadFavorites();
  }, []);

  const addFavorite = async (movie: Movie) => {
    try {
      const updatedFavorites = [...favoriteMovies, movie];
      setFavoriteMovies(updatedFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to add favorite', error);
    }
  };

  const removeFavorite = async (movieId: number) => {
    try {
      const updatedFavorites = favoriteMovies.filter(movie => movie.id !== movieId);
      setFavoriteMovies(updatedFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to remove favorite', error);
    }
  };

  return { favoriteMovies, addFavorite, removeFavorite };
};
