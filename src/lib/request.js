const API_KEY = "db782683baa66ab64b8fde0fb00877e2";

// check tmdb doc
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorTV: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceTV: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
