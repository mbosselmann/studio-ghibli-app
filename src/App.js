import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cardlist from "./components/Cardlist";
import Home from "./components/Home";
import Favourites from "./components/Favourites";

function App({ data }) {
  return (
    <div className="App">
      <Header />

      <div className="router">
        <Router>
          <div className="main__menu">
            <ul className="route-list">
              <li className="route-list__item">
                <Link to="/home">Home</Link>
              </li>
              <li className="route-list__item">
                <Link to="/films">Films</Link>
              </li>
              <li className="route-list__item">
                <Link to="/favourites">Favs</Link>
              </li>
            </ul>
          </div>
          <Route path="/home" component={Home} />
          <Route path="/films" component={Cardlist} />
          <Route path="/favourites" component={Favourites} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
