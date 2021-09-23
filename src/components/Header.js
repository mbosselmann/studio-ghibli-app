import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header({ onSetResourceType }) {
  return (
    <HeaderSection>
      <AppTitle>Studio Ghibli Film Collection Database</AppTitle>
      <NavbarContainer>
        <NavBar>
          <NavBarLink to="/home" activeClassName="is-active">
            Home
          </NavBarLink>
          <NavBarLink
            to="/films"
            activeClassName="is-active"
            onClick={() => onSetResourceType("films")}
          >
            Films
          </NavBarLink>
          <NavBarLink
            to="/characters"
            activeClassName="is-active"
            onClick={() => onSetResourceType("people")}
          >
            Characters
          </NavBarLink>
          <NavBarLink
            to="/locations"
            activeClassName="is-active"
            onClick={() => onSetResourceType("locations")}
          >
            Locations
          </NavBarLink>
        </NavBar>
      </NavbarContainer>
    </HeaderSection>
  );
}

export default Header;

const HeaderSection = styled.section`
  font-family: "header-font";
  text-align: center;
  position: relative;
  margin: 0 auto;
`;

const AppTitle = styled.h1`
  text-align: center;
  position: relative;
  margin: 11px auto;
  min-width: 350px;
  max-width: 700px;
  font-size: 2rem;

  @media only screen and (min-width: 400px) {
    margin: 7px auto;
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 440px) {
    margin: 3px auto;
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 478px) {
    margin: 35px auto;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 650px) {
    margin: 30px auto;
    font-size: 2rem;
  }

  @media only screen and (min-width: 800px) {
    margin: 25px auto;
    font-size: 2.5rem;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 10px 16px 0 #4b587880;
  border: 5px solid #f2f2f2;
`;

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  padding: 5px;
  width: 25%;
  font-size: 0.8rem;
  background-color: #fff;
  border: 1px double #fff;

  &:hover {
    background-color: #7a638d;
    color: #fff;
    border: 1px double #7a638d;
  }

  &.${(props) => props.activeClassName} {
    background-color: #4b5878;
    color: #fff;
    border: 1px double #4b5878;
  }
`;
