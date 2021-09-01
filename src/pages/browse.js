import React from "react";
import BrowseContainer from "../containers/browse";
import { FooterContainer } from "../containers/footer";
import requests from "../lib/request";
import Row from "../containers/row";

export default function Browse() {
  return (
    <>
      <BrowseContainer>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          IsLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrendingMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <FooterContainer />
      </BrowseContainer>
    </>
  );
}
