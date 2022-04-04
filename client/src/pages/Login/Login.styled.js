import styled from "styled-components";

export const Container = styled.main`
	margin: 2.5rem 0 0;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: center;
	text-align: center;
	min-height: 100vh;
	background-color: #fff68d;
	background-image: var(--bg-primary);
	background-attachment: fixed;
	background-size: cover;

	@media (max-width: 500px) {
		background: var(--bg-light);
	}

	& > a {
		margin-top: 1rem;
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

export const GithubAuth = styled.a`
	background: #23262ee5;
	color: var(--bg-light);
`;
// export const GitlabAuth = styled.a`
// 	background: #6753b5;
// 	color: var(--bg-light);
// `;
// export const BitbucketAuth = styled.a`
// 	background: #1e54c5e5;
// 	color: var(--bg-light);
// `;
export const GmailAuth = styled.a`
	border: var(--border-light);
	background: var(--bg-light);
`;
