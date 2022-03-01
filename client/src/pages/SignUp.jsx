import React from "react";
import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
      <div>
        <h1>Sign up. ¯\_(ツ)_/¯</h1>
      </div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23b1ff87' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23d7ffac' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23bcfe92' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23dbffb4' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c7fd9d' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23dfffbc' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d1fca8' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e3fec4' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23dbfab2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e6fecc' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e5f9bd' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23eafed4' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  color: var(--text-dark);
`;
