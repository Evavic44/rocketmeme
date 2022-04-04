import styled from "styled-components";

export const Container = styled.main`
	height: 600px;
	padding: 1rem;

	background-color: #fff68d;
	background-image: var(--bg-primary);
	background-attachment: fixed;
	background-size: cover;

	@media (max-width: 500px) {
		background: var(--bg-light);
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 100%;
		max-width: 1100px;
		margin: 0 auto;

		h2 {
			font-size: 3rem;
			line-height: 1.1;
		}

		p {
			font-size: 1.1rem;
			margin: 0.8rem 0;
			max-width: 700px;
		}

		@media (max-width: 900px) {
			h2 {
				font-size: 2rem;
			}

			p {
				font-size: 1rem;
			}
		}
	}
`;

// const HomeCategory = styled.section`
//   height: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const SideMenu = styled.div`
//   padding: 0 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   overflow: auto;
//   white-space: nowrap;
//   overflow-y: scroll;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
//   box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

//   a {
//     padding: 1rem;
//     font-size: 0.85rem;
//     font-weight: 400;
//     letter-spacing: -1px;
//     color: var(--dark-grey);
//     border-bottom: 1px solid transparent;
//     transition: 0.2s ease-in-out;

//     &:hover {
//       color: var(--text-dark);
//     }

//     &.active {
//       border-bottom: var(--border-black);
//       color: var(--text-dark);
//     }
//   }
// `;
