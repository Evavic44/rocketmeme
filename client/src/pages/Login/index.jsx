import React from "react";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Container, GithubAuth, GmailAuth } from "./Login.styled";

const clientID =
	"578412719010-kunrheea50ajh6vi4ruhncf1ps8keebu.apps.googleusercontent.com";

export default function Login() {
	const onFailure = (r, es) => {
		alert("");
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
				<img src="/images/logo.svg" className="logo" alt="Rocketmeme logo" />
				<h2>Rocket Sign In</h2>
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
			</header>
		</Container>
	);
}
