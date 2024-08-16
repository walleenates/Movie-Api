// src/components/Movie.js
import React from 'react';

const Movie = ({ Title, Poster, Year }) => {
  return (
    <div className="movie">
      <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/200"} alt={`${Title} Poster`} />
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  );
};

export default Movie;
