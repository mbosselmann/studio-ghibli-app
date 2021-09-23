import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Singlecard = ({ data }) => {
  const { id } = useParams();
  const film = data.filter((film) => film.id === id)[0];
  console.log(film);
  return (
    <SingleCardBox>
      <ActionContainer>
        <NavLink to="/films">Return</NavLink>
        <ButtonSave>SAVE</ButtonSave>
      </ActionContainer>
      <FilmContent>
        <FilmTitle>
          <p>
            <strong>Film Title:</strong> {film.title}
          </p>
          <p>
            <strong>Original Film Title:</strong> {film.original_title}
          </p>
          <p>({film.original_title_romanised})</p>
        </FilmTitle>
        Huhu {film.title}
      </FilmContent>
    </SingleCardBox>
  );
};
export default Singlecard;
