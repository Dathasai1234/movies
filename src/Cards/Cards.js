import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json";

    axios
      .get(apiUrl)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      {movieData ? (
        <div className="flex">
          {movieData.movies.map((movie) => (
            <Card key={movie.id} title={movie.title} image={movie.posterUrl} rating={movie.rating} year={movie.year} runtime={movie.runtime} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Cards;
