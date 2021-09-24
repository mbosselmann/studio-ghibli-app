import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import arrowBack from "../images/arrow-back.png";

const Singlecard = ({ data }) => {
  const { id } = useParams();
  const film = data.filter((film) => film.id === id)[0];
  console.log(film);
  return (
    <SingleCardBox>
      <ActionContainer>
        <ReturnButton to="/films">
          <Img src={arrowBack} />
        </ReturnButton>
        <ButtonSave>SAVE</ButtonSave>
      </ActionContainer>
      <FilmContent>
        <FilmTitle>
          <div>
            <p>
              <strong>Film Title:</strong> {film.title}
            </p>
            <p>
              <strong>Original Film Title:</strong> {film.original_title}
            </p>
            <p>({film.original_title_romanised})</p>
          </div>
          <FilmEmoji>
            <p>🎬</p>
          </FilmEmoji>
        </FilmTitle>
        <FilmDetails>
          <li>
            <strong>Director:</strong> {film.director}
          </li>
          <li>
            <strong>Producer:</strong>
            {film.producer}
          </li>
          <li>
            <strong>Release Date:</strong>
            {film.release_date}
          </li>
          <li>
            <strong>Running Time:</strong>
            {film.running_time} mins
          </li>
        </FilmDetails>
        <FilmDescription>
          <strong>Description</strong> {film.description}
        </FilmDescription>
      </FilmContent>
    </SingleCardBox>
  );
};
export default Singlecard;

const ReturnButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 12px 0 10px 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  background-color: #7a638d;
  border-radius: 50%;
  box-shadow: 0px 8px 16px 0 #4b587880;

  &:hover {
    background-color: #4b5878;
    color: #fff;
    cursor: pointer;
  }

  &.${(props) => props.activeClassName} {
    background-color: #4b5878;
    color: #fff;
  }
`;

const Img = styled.img`
  width: 20px;
`;

const SingleCardBox = styled.article`
  width: 300px;
  margin: 10px;
  font-family: "Montserrat", sans-serif;

  @media only screen and (min-width: 330px) {
    min-width: 75%;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: RGBA(255, 255, 255, 0.62);
  border-radius: 5px 5px 0 0;
`;

const ButtonSave = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  margin: 7px;
`;

const FilmContent = styled.div`
  height: auto;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  font-size: 0.9rem;
`;

const FilmTitle = styled.div`
  padding: 10px;
  height: 90px;
  -webkit-box-shadow: 0px 5px 15px -10px #7a638d;
  box-shadow: 0px 5px 15px -10px #7a638d;
  display: flex;
  justify-content: space-between;
`;

const FilmDetails = styled.ul`
  padding: 20px 10px 5px 10px;
  align-self: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const FilmEmoji = styled.div`
  padding-right: 3px;
`;

const FilmDescription = styled.div`
  padding: 5px 10px 20px 10px;
`;
