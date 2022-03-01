import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryTheme from "../../Components/CategoryTheme";

function Javascript() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // fetch javascript memes and set state value
  }, []);

  return (
    <div>
      <CategoryTheme title="Javascript Memes" memes={memes} />
    </div>
  );
}

const FirstStyle = styled.div`
  background: ${(props) => props.theme.bg.red};
  color: ${(props) => props.theme.color.white};
`;

export default Javascript;
