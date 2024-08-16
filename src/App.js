// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async (query) => {
      setLoading(true);
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching the movies:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onSearch={setSearchTerm} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default App;
