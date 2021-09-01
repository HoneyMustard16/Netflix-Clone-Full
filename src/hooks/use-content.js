// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function useContent(target, fetchUrl) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   return { [target]: movies };
// }
