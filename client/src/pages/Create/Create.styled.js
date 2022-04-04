import styled from "styled-components";

export const Container = styled.main`
	color: var(--text-dark);
	max-width: 1100px;
	margin: 50px auto 20px;
	padding: 1rem;

	input {
		font-size: 16px;
	}
`;

export const HomeCategory = styled.section`
	max-width: 1100px;
	margin: 2rem auto;
	padding: 1rem;

	.categoryHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;

		.category {
			border: var(--border-medium);
			outline: none;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 0.4rem 0.8rem;
		}
	}

	.memeTemplates {
		display: grid;
		grid-template-columns: repeat(100, 1fr);
		grid-template-rows: 100%;
		flex-wrap: nowrap;
		overflow: auto;

		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			text-decoration: none;
			width: 150px;
			border-radius: 5px;
			margin: 0 0.1rem;
			border: var(--border-medium);
			cursor: pointer;

			img {
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
				width: 100%;
				height: 150px;
				object-fit: cover;
			}

			.tag {
				padding: 0.5rem 0.1rem;
				color: var(--text-priamry);
				font-weight: 500;
				font-size: 0.7rem;
				letter-spacing: -0.5px;
			}
		}
	}
`;

export const Flex = styled.div`
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 1fr 1.2fr;
	gap: 15px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 5px;
	border-radius: 3px;
	padding: 1.5rem;

	.editContainer .btn {
		margin-top: 1.5rem;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1.2fr 1.2fr;
	}
	@media (max-width: 880px) {
		grid-template-columns: 1fr;
	}
`;

export const Actions = styled.div`
	display: flex;
	gap: 10px;
	padding-bottom: 10px;
`;

export const ActionButton = styled.button`
	padding: 0.5rem;
	width: 50%;
	border-radius: 3px;

	i {
		margin-left: 0.2rem;
	}

	&.delete {
		border: 1px solid #f85656;
		color: #f85656;
		width: 20%;
	}

	&.upload {
		cursor: not-allowed;	
	}
`;

export const EditView = styled.div`
	flex-grow: 1;
	padding: 10px;
	border: var(--border-light);
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: top center;

	@media (max-width: 900px) {
		background-size: contain;
	}

	> * {
		position: absolute;
	}

	[contenteditable] {
		outline: none;
		padding: 5px;
		border: 1px solid transparent;
		font-weight: bolder;
		font-size: 26px;
		text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
		color: #fff;

		:focus {
			border: var(--border-dark);
		}

		.justify-center {
			text-align: center;
		}

		.justify-left {
			text-align: left;
		}

		.justify-right {
			text-align: right;
		}
	}
`;

export const FileButtons = styled.div``;

export const Controls = styled.div`
	input,
	textarea {
		border: var(--border-medium);
		border-radius: 3px;
		padding: 5px;
		outline: none;
		font-family: "Poppins", sans-serif;
		width: 100%;

		&:focus {
			border: var(--border-dark);
		}
	}

	textarea {
		resize: none;
	}

	.text {
		input {
			min-width: 100%;
			width: 100%;
		}
	}

	.formatting {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 8px 0;

		@media (max-width: 768px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		input {
			margin-top: 0.5rem;
			background: none;
			border: var(--border-light);

			&:focus {
				background: var(--bg-gray);
			}
		}

		[type="text"] {
			width: 80px;
		}

		[type="color"] {
			width: 50px;
			box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
			height: 35px;
		}

		[type="range"] {
			width: 100%;
		}

		.styling {
			& > div * {
				margin: 0.2rem;
			}

			button {
				background: #fff;
				color: var(--text-dark);
				border: var(--border-light);
				border-radius: 3px;
				font-family: "Times New Roman", Serif;
				font-weight: bold;
				font-size: 1rem;
				width: 35px;
				height: 30px;
				padding: 0.3rem 0.5rem 0.5rem;
			}
		}
	}
`;
