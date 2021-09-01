import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { Header, Loading } from "../Components";
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";
import axios from "../lib/axios";
import requests from "../lib/request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function BrowseContainer({ children }) {
  const [movieBanner, setMovieBanner] = useState([]);
  const [category, setCategory] = useState("series");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const opts = {
    width: "1920",
    height: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playsinline: 1,
      rel: 0,
    },
  };

  const handleClick = (movieBanner) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movieBanner.id, multi: true })
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
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovieBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) //pick 1 random movie form object data
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header
        Browse
        src={`url("https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}")`}
        dontShowOnSmallViewPort
      >
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Movies
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>
            {movieBanner?.title ||
              movieBanner?.name ||
              movieBanner?.original_name}
          </Header.FeatureCallOut>
          <Header.Text>{movieBanner?.overview}</Header.Text>
          <Header.PlayButton onClick={() => handleClick(movieBanner)}>
            Play
          </Header.PlayButton>
        </Header.Feature>
        <Header.Gradient />
      </Header>
      {children}
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
