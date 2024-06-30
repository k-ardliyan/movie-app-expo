import React from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

const HomeScreen = () => {
  const { movies, loading } = useMovies();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      <View>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
