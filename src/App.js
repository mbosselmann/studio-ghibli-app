import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cardlist from "./components/Cardlist";
import Singlecard from "./components/Singlecard";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import styled from "styled-components";
import img from "./images/ged025.jpeg";
import "./fonts.css";
import { useEffect, useState } from "react";

function App({ data }) {
  const [resourceType, setResourceType] = useState("");
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => {
        setDataFilms(data);
      });
  }, [resourceType]);
  console.log(dataFilms);
  return (
    <AppBox>
      <StyledHeader>
        <Header
          resourceType={resourceType}
          onSetResourceType={setResourceType}
        />
      </StyledHeader>
      <Main>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/films">
            {dataFilms.map((film) => (
              <Cardlist
                title={film.title}
                key={film.id}
                originalTitle={film.original_title}
                originalTitleRomanised={film.original_title_romanised}
                director={film.director}
                producer={film.producer}
                date={film.release_date}
                runningTime={film.running_time}
                id={film.id}
              />
            ))}
          </Route>
          <Route exact path="/characters">
            {dataFilms.map((person) => (
              <Characters
                id={person.id}
                name={person.name}
                gender={person.gender}
                age={person.age}
                eyeColor={person.eye_color}
                hairColor={person.hair_color}
              />
            ))}
          </Route>
          <Route exact path="/locations">
            {dataFilms.map((location) => (
              <Locations />
            ))}
          </Route>
          <Route path="/films/:id">
            <Singlecard data={dataFilms} />
          </Route>
        </Switch>
      </Main>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div``;

const StyledHeader = styled.header`
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  height: 100px;
`;

const Main = styled.main`
  padding-top: 145px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;
