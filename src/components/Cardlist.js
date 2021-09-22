import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Cardlist(props) {
  return (
    <FilmCardBox>
      <SectionFilmCard>
        <FilmTitle>
          <P>
            <Strong>Film Title:</Strong> {props.title}
          </P>
          <P>
            <Strong>Original Film Title:</Strong> {props.originalTitle}
          </P>
          <P>({props.originalTitleRomanised})</P>
        </FilmTitle>
        <FilmOverview>
          <OverviewList>
            <li>
              <Strong>Director:</Strong> {props.director}
            </li>
            <li>
              <Strong>Producer:</Strong>
              {props.producer}
            </li>
            <li>
              <Strong>Release Date:</Strong>
              {props.date}
            </li>
            <li>
              <Strong>Running Time:</Strong>
              {props.runningTime} mins
            </li>
          </OverviewList>
          <FilmEmoji>
            <p>🎬</p>
          </FilmEmoji>
        </FilmOverview>
      </SectionFilmCard>
      <ShowMore>
        <Link to={`/films/${props.id}`}>
          <ShowMoreDButton>More</ShowMoreDButton>
        </Link>
      </ShowMore>
    </FilmCardBox>
  );
}

export default Cardlist;

const FilmCardBox = styled.div`
  width: 300px;
  margin: 5px;
`;

const SectionFilmCard = styled.div`
  background-color: #fff;
  color: #000;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  height: 220px;
`;

const FilmTitle = styled.div`
  padding: 10px;
  height: 90px;
  -webkit-box-shadow: 0px 5px 15px -10px #7a638d;
  box-shadow: 0px 5px 15px -10px #7a638d;
`;

const FilmOverview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 0.9rem;
  height: 120px;
`;

const OverviewList = styled.ul`
  align-self: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const Strong = styled.strong`
  font-size: 0.8rem;
  margin-right: 5px;
`;

const P = styled.p`
  font-size: 0.9rem;
`;

const FilmEmoji = styled.div`
  padding-right: 3px;
`;

const ShowMoreDButton = styled.button`
  padding: 10px;
  border: none;
  width: 50%;
  border-radius: 5px;
  background-color: #7a638d;
  color: #fff;
  box-shadow: 0px 5px 16px 0 #4b587880;

  &:hover {
    background-color: #4b5878;
  }
`;

const ShowMore = styled.div`
  text-align: center;
  height: 50px;
  padding-top: 8px;
  background-color: RGBA(255, 255, 255, 0.62);
  border-radius: 0 0 5px 5px;
`;
