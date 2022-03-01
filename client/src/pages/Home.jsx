import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MemeCard from "../Components/MemeCard";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [allMemes, setAllMemes] = useState([]);
  const slice = useRef();

  // fetch and set memes for home page view
  useEffect(() => {
    // fetchMemes();
    (async () => {
      try {
        const res = await axios.get("https://api.imgflip.com/get_memes");
        // console.log(res);
        if (res.data.success) {
          setAllMemes(res.data.data.memes);
          slice.current = 0;
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // useEffect(() => {
  //   // update memes
  //   if(allMemes.length > 0) {
  //     setMemes(allMemes.slice(slice, 10));
  //     slice.current += 10;
  //     console.log(memes, slice);
  //   }
  // }, [allMemes]);

  // useEffect(() => {
  //   if(memes.length > 0) slice.current += 10;
  // }, [memes]);

  // Fade top
  const fadeTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="hero">
      <ContentContainer>
        <Content>
          <Form action="">
            <Input
              // variants={fadeTop}
              // initial="hidden"
              // animate="visible"
              // transition={{ duration: 0.6 }}
              // //
              type="search"
              name="Search"
              id="Search"
              autocomplete="off"
              placeholder="Search for free latest memes"
            />
            <button type="submit" aria-label="Search Button">
              <i className="icon fas fa-search"></i>
            </button>
          </Form>
          <motion.h2
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            Suggested: pepe, javascript, coding, web3, stackoverflow
          </motion.h2>

          <motion.p
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            A collection of interesting and funny{" "}
            <span className="highlight">programming memes</span> to help lighten
            up your mood.{" "}
            <Image
              src="https://r6fp86mr.tinifycdn.com/images/cool_dog.gif"
              alt="dodge dog"
            ></Image>
          </motion.p>
        </Content>
      </ContentContainer>

      <HomeCategory>
        <div className="categoryHeader">
          <h2>Browse Categories</h2>

          <div className="categoryOptions">
            <select className="category" name="category" id="category">
              <option value="Latest">Latest</option>
              <option value="Trending">Trending</option>
              <option value="Downloads">Downloads</option>
            </select>
          </div>
        </div>
        <div className="homeCategory">
          <NavLink to="/categories" className="card">
            <figure className="title-one img-hover"></figure>
            <div className="tag">
              <h3>Technology</h3>
              <p>1100 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-two img-hover"></figure>
            <div className="tag">
              <h3>Comrade</h3>
              <p>200 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-three img-hover"></figure>
            <div className="tag">
              <h3>Pepe</h3>
              <p>930 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-four img-hover"></figure>
            <div className="tag">
              <h3>JavaScript</h3>
              <p>99 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-five img-hover"></figure>
            <div className="tag">
              <h3>NFT</h3>
              <p>181 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-six img-hover"></figure>
            <div className="tag">
              <h3>Stackoveflow</h3>
              <p>181 posts</p>
            </div>
          </NavLink>

          <NavLink to="/categories" className="card">
            <figure className="title-seven img-hover"></figure>
            <div className="tag">
              <h3>Coding</h3>
              <p>6200 posts</p>
            </div>
          </NavLink>
        </div>
      </HomeCategory>

      <GridGallery>
        <div className="gallery-container">
          {/*Put the scroll bar always on the bottom*/}
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              // if(slice <= 100) {
              // };
              // setMemes(prev => prev.concat(allMemes));
            }}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {allMemes.length != 0
              ? allMemes.map((i, idx) => <MemeCard link={i.url} key={idx} />)
              : null}
          </InfiniteScroll>
          {/* <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-one.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-two.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-three.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-five.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-four.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-six.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-seven.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-eight.jpg" />
          <MemeCard link="https://r6fp86mr.tinifycdn.com/images/memes/image-nine.jpg" /> */}
        </div>
      </GridGallery>
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
  background: url(https://r6fp86mr.tinifycdn.com/images/linth.svg) no-repeat
    center center/cover;
  box-shadow: inset 1000px 1000px 1000px rgba(0, 0, 0, 0.6);
`;

// Hero content
const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-light);
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
    max-width: 800px;
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
  width: 100%;
  transition: 0.2s ease-in-out;
  max-width: 850px;
  height: 54px;
  background-color: #f5f5f5;
  border-radius: 4px;

  /* Submit search button */
  button {
    background: var(--primary-color);
    color: #fff;
    width: 8%;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  /* Make form width stretch the whole container */
  @media (max-width: 768px) {
    width: 100%;

    button {
      width: 12%;
    }
  }

  @media (max-width: 400px) {
    width: 100%;

    button {
      width: 23%;
    }
  }
`;

// Search Input
const Input = styled.input`
  width: 92%;
  font-size: 0.9rem;
  border-width: 0;
  outline: none;
  transition: 0.1s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  padding-left: 20px;
  padding-right: 20px;

  /* 4k screens */
  @media (min-width: 1920px) {
    font-size: 1.2rem;
    width: 100%;
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
      background-color: var(--primary-color);
      color: white;
      text-decoration: none;
      overflow: hidden;
      width: 200px;
      border-radius: 3px;

      .tag {
        padding: 1rem;

        h3 {
          font-weight: 600;
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

      .title-one {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-one.webp);
      }
      .title-two {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-two.webp);
      }
      .title-three {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-three.webp);
      }
      .title-four {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-one.webp);
      }
      .title-five {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-two.webp);
      }
      .title-six {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-three.webp);
      }
      .title-seven {
        background-image: url(https://r6fp86mr.tinifycdn.com/images/imageCategory/category-one.webp);
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
