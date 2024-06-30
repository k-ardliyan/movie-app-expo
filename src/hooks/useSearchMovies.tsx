import { useState, useEffect } from 'react';
import { Movie } from '../types/Movie';
import { searchMovies } from '../utils/api';

export const useSearchMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim() === '') {
        // Jika query kosong, reset movies dan loading
        setMovies([]);
        setLoading(false);
        return;
      }

      setLoading(true); // Set loading true sebelum memulai fetching
      try {
        const response = await searchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
        setMovies([]); // Set movies ke array kosong jika terjadi error
      } finally {
        setLoading(false); // Set loading false setelah fetching selesai, baik sukses atau error
      }
    };
    const delayDebounceFn = setTimeout(() => {
      fetchMovies();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return { movies, loading };
};
