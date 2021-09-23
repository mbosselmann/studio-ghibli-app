import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Singlecard = (props) => {
  const { id } = useParams();
  const film = props.data.filter((x) => x.id === id)[0];
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
