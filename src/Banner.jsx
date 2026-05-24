import { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  color: ${(props) => (props.selected ? "blue" : "red")};
  bacground-color: silver;
`;

function Banner({ title, numOfStudents }) {
  const [selected, setSelected] = useState(true);
  return (
    <DIV selected={selected}>
      <button onClick={() => setSelected((s) => !s)}>change</button>
      <hr />
      <h2>Banner</h2>
      <h3>{title}</h3>
      <span>{numOfStudents} Students</span>
      <hr />
    </DIV>
  );
}

export default Banner;
