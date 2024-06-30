import axios from 'axios';
import { MovieResponse } from '@/types/Movie';

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>('/movie/popular');
  return response.data;
};

export const searchMovies = async (query: string): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};
