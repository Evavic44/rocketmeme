import styled from "styled-components";

const MemeCardStyle = styled.div`
	.image-container {
		display: flex;
		flex-direction: column;
		border-radius: 3px;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border: var(--border-medium);
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	.gallery-image {
		height: calc(auto + contain);
		padding-bottom: 75% / 43;
		object-fit: cover;
		cursor: pointer;

		&:hover {
			box-shadow: inset 10px 1000px 10px rgba(255, 255, 255, 0.5);
		}
	}

	.gallery-tag {
		display: flex;
		flex-direction: column;
		letter-spacing: -0.9px;
		padding: 0 0.5rem;

		.tag-title {
			font-size: 0.85rem;
			font-weight: 500;
		}

		.tag-category {
			font-size: 0.78rem;
			font-weight: 400;
			color: var(--secondary-color);
			text-decoration: underline;
		}
	}

	.tag-content {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.tag-buttons {
			display: flex;

			.tag-icons {
				display: flex;
				align-items: center;
				margin: 0 0.4rem;
				font-size: 0.8rem;

				button {
					margin-right: 0.3rem;
					transition: 0.1s ease-in-out;
					color: #9e9ea7;

					&:focus,
					&:hover,
					&:visited {
						color: var(--primary-color);
					}
				}
			}
		}
	}
`;

export default MemeCardStyle;
