import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientID =
  "578412719010-kunrheea50ajh6vi4ruhncf1ps8keebu.apps.googleusercontent.com";

export default function Login() {
  const onFailure = (res) => {
    alert("Failed login");
  };

  const onSuccess = async (res) => {
    console.log(`[Login Success] currentUser:`, res);

    const { email, name, imageUrl } = res.profileObj;
    const data = {
      email,
      name,
      imageUrl,
    };
  };

  return (
    <Container>
      <a href="/">
        <i className="fas fa-arrow-left"></i>
        Go Back
      </a>
      <header>
        <img src="/images/logo.svg" className="logo" alt="Memefy logo" />
        <h2>Rocketmeme Sign In</h2>
        <p>Sign in to see your favourite memes and downloads</p>

        {/* <GitlabAuth className="button" href="/">
          <i className="fab fa-gitlab"></i> Continue with GitLab
          </GitlabAuth>
          <BitbucketAuth className="button" href="/">
          <i className="fab fa-bitbucket"></i> Continue with Bitbucket
         </BitbucketAuth> */}
        <GoogleLogin
          clientId={clientID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            // <button
            //   className="createGoogle"
            //   onClick={renderProps.onClick}
            //   // disabled={renderProps.disabled}
            // >
            //   {" "}
            //   Sign in with Google
            // </button>
            <GmailAuth className="button" onClick={renderProps.onClick}>
              <img
                src="/images/google.svg"
                className="gicon"
                alt="Google Icon"
                width="17px"
              />
              Continue with Google
            </GmailAuth>
          )}
          isSignedIn={true}
        />
        <GithubAuth className="button" href="/">
          <i className="fab fa-github"></i> Continue with GitHub
        </GithubAuth>

        <p>
          Don't have an account?
          <NavLink className="signup" to="/SignUp">
            Sign Up
          </NavLink>
        </p>
      </header>
    </Container>
  );
}

const Container = styled.main`
  margin: 3rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23b1ff87' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23d7ffac' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23bcfe92' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23dbffb4' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c7fd9d' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23dfffbc' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d1fca8' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e3fec4' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23dbfab2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e6fecc' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e5f9bd' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23eafed4' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  & > a {
    align-self: flex-start;
    padding: 0 0 1rem 0.8rem;
    color: var(--dark-grey);
    transition: 0.2s ease-in-out;

    &:hover {
      color: inherit;
      color: var(--bg-dark);
    }

    i {
      margin-right: 0.3rem;
    }
  }

  header {
    padding: 3rem 2rem;
    background: var(--bg-light);
    border: 1px solid #eee;
    border-radius: 5px;

    .logo {
      margin-bottom: 1rem;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.7rem;
      margin: 0.7rem 0;
      border-radius: 3px;
      font-size: 0.95rem;
      width: 100%;

      i,
      img {
        margin-right: 1rem;
      }
    }

    h2 {
      font-size: 1.7rem;
      font-weight: 500;
    }

    p {
      font-size: 0.75rem;
      color: var(--dark-grey);
      padding: 0.3rem 0 1rem;
    }

    .logo {
      width: 45px;
    }

    .signup {
      margin-left: 0.3rem;
      color: var(--primary-color);
    }
  }
`;

const GithubAuth = styled.a`
  background: #23262ee5;
  color: var(--bg-light);
`;
const GitlabAuth = styled.a`
  background: #6753b5;
  color: var(--bg-light);
`;
const BitbucketAuth = styled.a`
  background: #1e54c5e5;
  color: var(--bg-light);
`;
const GmailAuth = styled.a`
  border: var(--border-light);
  background: var(--bg-light);
`;
