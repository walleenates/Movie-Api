// src/components/MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie
          key={movie.imdbID}
          Title={movie.Title}
          Poster={movie.Poster}
          Year={movie.Year}
        />
      ))}
    </div>
  );
};

export default MovieList;
