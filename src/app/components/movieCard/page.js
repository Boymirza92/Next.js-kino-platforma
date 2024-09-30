import React from "react";
import styled from "styled-components";

const Card = styled("div")`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: 300px; 
  height: 250px;
  text-align: center;

  img {
    max-width: 100%; 
    height: auto;
    border-radius: 8px; 
`;

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <img src={movie.backdropPath} alt={movie.title} />
      <h3 className="nav" style={{color: "green"}}>{movie.title}</h3>
    </Card>
  );
};

export default MovieCard;
