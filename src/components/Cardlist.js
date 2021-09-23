import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Cardlist(props) {
  return (
    <FilmCardBox>
      <SectionFilmCard>
        <FilmTitle>
          <p>
            <strong>Film Title:</strong> {props.title}
          </p>
          <p>
            <strong>Original Film Title:</strong> {props.originalTitle}
          </p>
          <p>({props.originalTitleRomanised})</p>
        </FilmTitle>
        <FilmOverview>
          <OverviewList>
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
          <FilmEmoji>
            <p>🎬</p>
          </FilmEmoji>
        </FilmOverview>
      </SectionFilmCard>
      <ShowMore>
        <ShowMoreButton to={`/films/${props.id}`}>More &#10140;</ShowMoreButton>
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

const FilmEmoji = styled.div`
  padding-right: 3px;
`;

const ShowMoreButton = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin: 10px 0 10px 0;
  padding-top: 8px;
  width: 40%;
  height: 30px;
  font-size: 0.7rem;
  background-color: #7a638d;
  border-radius: 5px;
  box-shadow: 0px 10px 16px 0 #4b587880;

  &:hover {
    background-color: #4b5878;
    color: #fff;
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
