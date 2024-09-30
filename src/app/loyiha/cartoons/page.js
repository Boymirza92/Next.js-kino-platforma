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

const ScienceFiction = () => {
  const [scienceFiction, setScienceFiction] = useState([]);

  useEffect(() => {
    axios.get("https://zhamal-tv.netlify.app/science_fiction_movies/get_all")
      .then((response) => {
        setScienceFiction(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container>
      {scienceFiction.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Container>
  );
};

export default ScienceFiction;
