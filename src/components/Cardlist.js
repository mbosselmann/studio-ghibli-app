import styled from "styled-components";
import { NavLink } from "react-router-dom";
import arrowForward from "../images/arrow-forward.png";

function Cardlist(props) {
  return (
    <FilmCardBox>
      <SectionFilmCard>
        <FilmTitle aria-label="film-title">
          <li>
            <strong>Film Title:</strong> {props.title}
          </li>
          <li>
            <strong>Original Film Title:</strong> {props.originalTitle}
          </li>
          <li>({props.originalTitleRomanised})</li>
        </FilmTitle>
        <FilmOverview>
          <OverviewList aria-label="film-content">
            <li>
              <strong>Director:</strong> {props.director}
            </li>
            <li>
              <strong>Producer:</strong>
              {props.producer}
            </li>
            <li>
              <strong>Release Date:</strong>
              {props.date}
            </li>
            <li>
              <strong>Running Time:</strong>
              {props.runningTime} mins
            </li>
          </OverviewList>
          <FilmEmoji role="emoji">
            <p>🎬</p>
          </FilmEmoji>
        </FilmOverview>
      </SectionFilmCard>
      <ShowMore>
        <ShowMoreButton to={`/films/${props.id}`}>
          More <Img src={arrowForward} />
        </ShowMoreButton>
      </ShowMore>
    </FilmCardBox>
  );
}

export default Cardlist;

const FilmCardBox = styled.article`
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

const FilmTitle = styled.ul`
  list-style-type: none;
  font-size: 0.9rem;

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

const FilmEmoji = styled.div`
  padding-right: 3px;
`;

const ShowMoreButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  margin: 12px 0 10px 0;
  text-decoration: none;
  text-transform: uppercase;
  width: 40%;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  background-color: #7a638d;
  border-radius: 5px;
  box-shadow: 0px 10px 16px 0 #4b587880;

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

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: RGBA(255, 255, 255, 0.62);
  border-radius: 0 0 5px 5px;
`;

const Img = styled.img`
  margin-left: 5px;
  width: 15px;
`;
