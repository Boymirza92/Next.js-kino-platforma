"use client"
import { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/page";

import styled from "styled-components";
import axios from "axios";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const HomPagesDefolt = () => {
  const [warMovies, setWarMovies] = useState([]);

  useEffect(() => {
    axios.get("https://zhamal-tv.netlify.app/war_movies/get_all")
      .then((response) => {
        setWarMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container>

      {warMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Container>
  );
};

export default HomPagesDefolt;
