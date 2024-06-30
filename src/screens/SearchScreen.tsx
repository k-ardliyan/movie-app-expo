import React, { useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { useSearchMovies } from '../hooks/useSearchMovies';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const { movies, loading } = useSearchMovies(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search movies..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  flatListContent: {
    paddingBottom: 16,
  },
});

export default SearchScreen;
