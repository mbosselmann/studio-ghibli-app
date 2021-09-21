import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Singlecard = (props) => {
  const { id } = useParams();
  const film = props.data.filter((x) => x.id === id)[0];
  return (
    <div>
      <div>Huhu {film.title}</div>
    </div>
  );
};
export default Singlecard;
