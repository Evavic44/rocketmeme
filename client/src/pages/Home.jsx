import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MemeCard from "../Components/MemeCard";
import InfiniteScroll from "react-infinite-scroller";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_CLIENT,
	cache: new InMemoryCache(),
});

const getCategoriesQuery = gql`
	query getPaginatedMemeCategories {
		meme_categories_aggregate(limit: 10, offset: 0) {
			nodes {
				id
				category_title
				no_of_memes
				thumb_nail
			}
		}

		count: memes_aggregate(offset: 0) {
			aggregate {
				count
			}
		}
	}
`;

const getPaginatedMemes = gql`
	query getPaginatedMemes($limit: Int, $offset: Int) {
		memes_aggregate(limit: $limit, offset: $offset) {
			nodes {
				id
				downloads
				likes
				views
				image_link
				category
				title
			}
		}
	}
`;

const getPaginatedMemeSearch = gql`
	query getPaginatedMemeSearch($searchTerm: String!) {
		memes(limit: 10, offset: 0, where: { category: { _ilike: $searchTerm } }) {
			id
			downloads
			likes
			views
			image_link
			category
			title
		}
	}
`;

export default function Home() {
	const [allMemes, setAllMemes] = useState([]);
	const [categories, setCategories] = useState([]);
	const [count, setCount] = useState();
	const [offset, setOffset] = useState(0);
	const [isInputEmpty, setInputEmpty] = useState(true);

	const loadMemes = () => {
		client
			.query({
				query: getPaginatedMemes,
				variables: { limit: 10, offset: offset },
			})
			.then((result) => {
				const memes = result.data.memes_aggregate.nodes;
				setAllMemes((prev) => prev.concat(memes));
				setCount((prev) => prev - 10);
				setOffset((prev) => prev + 10);
			});
	};

	const loadSearch = (e) => {
		e.preventDefault();
		const searchTerm = e.target.search.value;
		client
			.query({
				query: getPaginatedMemeSearch,
				variables: { searchTerm: `%${searchTerm}%` },
			})
			.then((result) => {
				const memes = result.data.memes;
				setAllMemes(memes);
				setInputEmpty(false);
			});
	};

	// fetch and set meme catehories
	useEffect(() => {
		(async () => {
			client
				.query({
					query: getCategoriesQuery,
				})
				.then((result) => {
					setCategories(result.data.meme_categories_aggregate.nodes);
					setCount(result.data.count.aggregate.count);
				});
		})();
	}, []);

	// Fade top
	const fadeTop = {
		hidden: { opacity: 0, y: -30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<Container className="hero">
			<ContentContainer>
				<Content>
					<Form onSubmit={loadSearch}>
						<Input
							type="search"
							name="search"
							id="Search"
							autocomplete="off"
							placeholder="Search for free latest memes"
						/>
						<button type="submit" aria-label="Search Button">
							<i className="icon fas fa-search"></i>
						</button>
					</Form>
					<h2
					// variants={fadeTop}
					// initial="hidden"
					// animate="visible"
					// transition={{ duration: 0.6 }}
					>
						Suggested: javascript, nft, stackoverflow
					</h2>

					<p
					// variants={fadeTop}
					// initial="hidden"
					// animate="visible"
					// transition={{ duration: 0.6 }}
					>
						The Internet's most awesome free meme marketplace and editor for
						creating and downloading memes
						{/* <Image src="/images/cool_dog.gif" alt="nodding dodge dog"></Image> */}
					</p>
				</Content>
			</ContentContainer>

			<HomeCategory>
				{/* <div className="categoryHeader">
					<h2>Browse Categories</h2>

					<div className="categoryOptions">
						<select className="category" name="category" id="category">
							<option value="Latest">Latest</option>
							<option value="Trending">Trending</option>
							<option value="Downloads">Downloads</option>
						</select>
					</div>
				</div> */}
				<div className="homeCategory">
					{categories.map((i) => (
						<NavLink to="/categories" className="card" key={i.id}>
							<figure
								className="img-hover"
								style={{
									backgroundImage: `url(${i.thumb_nail})`,
									backgroundColor: "grey",
								}}
							></figure>
							<div className="tag">
								<h3>{i.category_title}</h3>
								<p>{i.no_of_memes} posts</p>
							</div>
						</NavLink>
					))}
				</div>
			</HomeCategory>

			{isInputEmpty ? (
				<GridGallery>
					<div className="gallery-container">
						{/*Put the scroll bar always on the bottom*/}
						<InfiniteScroll
							pageStart={0}
							loadMore={loadMemes}
							hasMore={count - 10 >= 0}
							loader={
								<div className="loader" key={0}>
									Loading ...
								</div>
							}
						>
							{allMemes.map((i) => (
								<MemeCard
									link={i.image_link}
									key={i.id}
									downloads={i.downloads}
									likes={i.likes}
									views={i.views}
									category={i.category}
									title={i.title}
								/>
							))}
						</InfiniteScroll>
					</div>
				</GridGallery>
			) : (
				<GridGallery>
					<div className="gallery-container">
						{/*Put the scroll bar always on the bottom*/}
						{allMemes.map((i) => (
							<MemeCard
								link={i.image_link}
								key={i.id}
								downloads={i.downloads}
								likes={i.likes}
								views={i.views}
								category={i.category}
								title={i.title}
							/>
						))}
					</div>
				</GridGallery>
			)}
		</Container>
	);
}

// Dodge Dog image
const Image = styled.img`
	width: 30px;
	height: 30px;
`;

// Hero container
const Container = styled.header`
	position: relative;
	@media (max-width: 430px) {
		margin-top: 3rem;
	}
`;

const ContentContainer = styled.div`
	background-color: #fff68d;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23fff8a4' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23fff9bb' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23fffbd2' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23fffde9' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23FFFFFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffffff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffffff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffffff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23ffffff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFFFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;

	@media (max-width: 500px) {
		background: var(--bg-light);
	}
`;

// Hero content
const Content = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 10;
	max-width: 1000px;
	margin: 2.4rem auto 0;
	padding: 1.2rem;
	min-height: 470px;

	h2 {
		font-weight: 400;
		font-size: 0.8rem;
		margin: 1rem 0 1.5rem;
		letter-spacing: 0;
	}

	p {
		line-height: 1.4;
		font-size: 2rem;
		font-weight: 600;
		letter-spacing: -1px;
		max-width: 900px;
	}

	/* Move items up on screens smaller <= 768px */

	/* 4k & Desktop screens */
	@media (min-width: 1920px) {
		max-width: 1200px;

		h2 {
			font-size: 1.1rem;
		}

		p {
			font-size: 2.3rem;
			max-width: 900px;
		}
	}

	/* Tablet screens */
	@media (max-width: 768px) {
		p {
			font-size: 1.7rem;
		}
	}
`;

// Search bar container (Form)
const Form = styled.form`
	display: flex;
	flex-wrap: nowrap;
	width: 90%;
	transition: 0.2s ease-in-out;
	max-width: 850px;
	height: 54px;
	background-color: #f5f5f5;
	border-radius: 4px;

	/* Submit search button */
	button {
		background: var(--secondary-color);
		color: #fff;
		transition: 0.3s ease-in-out;
		overflow: hidden;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		padding: 0 1.5rem;
	}
`;

// Search Input
const Input = styled.input`
	width: 100%;
	font-size: 0.9rem;
	border-width: 0;
	border: var(--border-mid);
	outline: none;
	transition: 0.1s ease-in-out;
	appearance: none;
	-webkit-appearance: none;
	padding-left: 20px;
	padding-right: 20px;

	&:focus {
		border: var(--border-medium);
	}

	/* 4k screens */
	@media (min-width: 1920px) {
		font-size: 1.2rem;
		padding: 1.1rem 1rem;
	}
`;

const HomeCategory = styled.section`
	max-width: 1100px;
	margin: 0 auto;
	padding: 1rem;
	margin-top: 2rem;

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

	.homeCategory {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		gap: 0.4em;
		overflow: auto;
		white-space: nowrap;
		overflow-y: none;
		scrollbar-width: none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}

		.card {
			border: var(--border-mid);
			color: #222;
			text-decoration: none;
			overflow: hidden;
			width: 200px;
			border-radius: 3px;

			.tag {
				padding: 1rem;

				h3 {
					font-weight: 600;
					font-size: 0.9rem;
				}

				p {
					font-size: 0.7rem;
				}
			}

			figure {
				transition: transform 0.3s;
				width: 100%;
				height: 120px;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
			}
		}
	}
`;

const GridGallery = styled.section`
	max-width: 1200px;
	margin: 3rem auto;
	padding: 0.3rem;

	.gallery-container {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		-webkit-column-width: 33%;
		-moz-column-width: 33%;
		column-count: 3;
		column-width: 33%;

		@media (max-width: 900px) {
			-webkit-column-count: 2;
			-moz-column-count: 2;
			-webkit-column-width: 50%;
			-moz-column-width: 50%;
			column-count: 2;
			column-width: 50%;
		}

		@media (max-width: 600px) {
			-webkit-column-count: 1;
			-moz-column-count: 1;
			-webkit-column-width: 100%;
			-moz-column-width: 100%;
			column-count: 1;
			column-width: 100%;
		}
	}
`;
