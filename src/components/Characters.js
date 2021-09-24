import styled from "styled-components";

function Characters(props) {
  return (
    <PersonCard>
      <PersonCardHeader>{props.name}</PersonCardHeader>
    </PersonCard>
  );
}
export default Characters;

const PersonCard = styled.div`
  width: 300px;
  height: 220px;
  margin: 5px;
  font-family: "Montserrat", sans-serif;
`;

const PersonCardHeader = styled.div`
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  height: 90px;
  padding: 10px;
  font-size: 0.9rem;
  -webkit-box-shadow: 0px 5px 15px -10px #7a638d;
  box-shadow: 0px 5px 15px -10px #7a638d;
`;
