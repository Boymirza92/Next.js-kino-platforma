"use client";

import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/page";

import styled from "styled-components";
import axios from "axios";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

// const TrendingMovies = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://zhamal-tv.netlify.app/trending_movies/get_all")
//       .then((response) => {
//         setTrendingMovies(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, []);

//   return (
//     <Container>
//       {trendingMovies.map((movie, index) => (
//         <MovieCard key={index} movie={movie} />
//       ))}
//     </Container>
//   );
// };

// export default TrendingMovies;


const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios.get("https://zhamal-tv.netlify.app/trending_movies/get_all")
      .then((response) => {
        setTrendingMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container> 
      {trendingMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Container>
  );
};

export default TrendingMovies;
