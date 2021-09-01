import axios from "../lib/axios";
import React, { useState, useEffect } from "react";
import { Card } from "../Components";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, IsLargeRow, searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search); //passing Youtube Url to Get its ID
          setTrailerUrl(urlParams.get("v")); //get string after V in youtube URL
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <Card.Group>
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Entities>
            {movies.map((movie) => (
              <Card.Item>
                <Card.Image
                  onClick={() => handleClick(movie)}
                  IsLargeRow
                  key={movie.id}
                  src={`${base_url}${
                    IsLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <Card.Meta>
                  <Card.SubTitle>
                    {movie?.title || movie?.name || movie?.original_name || ""}
                  </Card.SubTitle>
                  <Card.Text>{movie?.overview}</Card.Text>
                </Card.Meta>
              </Card.Item>
            ))}
          </Card.Entities>
          <Card.Youtube>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </Card.Youtube>
        </Card>
      </Card.Group>
    </>
  );
}
