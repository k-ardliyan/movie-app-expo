import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Movie } from '@/types/Movie';

type MovieDetailScreenRouteProp = RouteProp<{ params: { movie: Movie } }, 'params'>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const { movie } = route.params;

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={{ width: '100%', height: 300, marginBottom: 16 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>{movie.title}</Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>Rating: {movie.vote_average}</Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>Release Date: {movie.release_date}</Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>Genres: {movie.genre_ids.join(', ')}</Text>
        <Text style={{ fontSize: 16, marginBottom: 16 }}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
