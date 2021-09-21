import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cardlist from "./components/Cardlist";
import Favourites from "./components/Favourites";
import Singlecard from "./components/Singlecard";
import styled from "styled-components";
import img from "./images/ged025.jpeg";
import "./fonts.css";

function App({ data }) {
  const dataFilms = data.films;
  console.table(dataFilms);
  return (
    <AppBox>
      <StyledHeader>
        <Route
          exact
          path={[
            "/",
            "/home",
            "/films",
            "/films/:id",
            "/characters",
            "/locations",
          ]}
        >
          <Header />
        </Route>
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
            <Favourites />
          </Route>
          <Route exact path="/locations">
            <Favourites />
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
