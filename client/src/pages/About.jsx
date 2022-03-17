import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ChatwootWidget from "../Components/Chatwoot.js";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function About({ images, scrollPosition }) {
  // Fade top
  const fadeTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <Header>
        <motion.div
          className="header-content"
          variants={fadeTop}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <h1>About Rocketmeme</h1>
          <h2>
            Rocketmeme is all about creating and sharing laughable memes for
            developers.
          </h2>
          <p>
            Wether you're a beginner or advanced developer, memes are something
            we can all relate with every once in a while.
          </p>

          <a href="/create" className="btn btn-primary">
            Start Creating
          </a>
        </motion.div>
      </Header>

      <LazyLoadImage
        className="showcase-image"
        effect="blur"
        src="/images/memefy-editor.webp"
        alt="Illustration of how to use memefy editor"
        width="100%"
        height="100%"
        placeholderSrc={"/images/editor-canvas.png"}
      ></LazyLoadImage>

      <Section id="features">
        <div className="heading">
          <h2>Rocketmeme Features</h2>
          <p>
            Our <span className="highlight">features</span> are focused on
            giving you an amazing experience{" "}
            <p>
              to share with loved ones and hopefully get a smile out of you.
            </p>
          </p>
        </div>

        <div className="card-container">
          <div className="card">
            <i className="fas fa-bolt"></i>
            <div>
              <h3>Blazing Fast</h3>
              <p>
                Creating and edit a meme in a matter of seconds, no reload or
                refresh time.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-brush"></i>
            <div>
              <h3>Highly Customizable</h3>
              <p>
                Highly customizable and allows users to create their own memes
                from the ground up.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-cloud-arrow-down"></i>
            <div>
              <h3>Download</h3>
              <p>
                Easily download memes you created in high quality PNG format.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-share-nodes"></i>
            <div>
              <h3>Easy to Share</h3>
              <p>
                Share your created memes on your favourite social platforms,
                Twitter, Facebook, Discord, ETC.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="creators">
        <div className="heading heading-creators">
          <h2>Meet the creators</h2>
          <p>
            The people behind the idea and iteration of{" "}
            <span className="highlight">Rocketmeme.</span>
          </p>
        </div>

        <Creators>
          <div className="user">
            <LazyLoadImage
              src="https://avatars.githubusercontent.com/u/62628408?v=4"
              alt="User image"
              className="user-image"
              effect="blur"
              scrollPosition={scrollPosition}
              placeholderSrc={"/images/canvas-eke.jpg"}
            ></LazyLoadImage>
            <h2>Founder, Frontend</h2>
            <h3>Victor Eke</h3>
          </div>

          <div className="user">
            <LazyLoadImage
              src="https://avatars.githubusercontent.com/u/73044138?v=4"
              alt="User image"
              className="user-image"
              effect="blur"
              scrollPosition={scrollPosition}
              placeholderSrc={"/images/canvas-spiff.jpg"}
            ></LazyLoadImage>

            <h2>CTO, Backend</h2>
            <h3>Spiff Jekey Green</h3>
          </div>
        </Creators>
      </Section>

      <FooterCta>
        <div className="footercta-icon">
          <i className="fas fa-crop"></i>
          <h3>Start Creating now</h3>
          <p>It's completely free, no need to sign up</p>
        </div>

        <div>
          <a href="/create" className="btn">
            Start Creating
          </a>
        </div>
      </FooterCta>

      <ChatwootWidget />
    </Container>
  );
}

const Container = styled.main`
  background-color: #fff68d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23fff8a4' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23fff9bb' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23fffbd2' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23fffde9' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23FFFFFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffffff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffffff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffffff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23ffffff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFFFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 500px) {
    background: var(--bg-light);
  }

  min-height: 25rem;
  margin: 7.5rem auto 0;
  padding: 1.3rem 1.5rem;

  i {
    transition: 0.3s ease-in-out;
  }

  .showcase-image {
    margin: 7rem 0;
    box-shadow: 2px 5px 50px rgba(0, 0, 0, 0.2);
  }
`;

// Header section
const Header = styled.header`
  .header-content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--primary-color);
    }

    h2 {
      font-size: 3rem;
      line-height: 1.2;
      font-weight: 600;
      padding: 1rem 0;

      /* Responsiveness */
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      max-width: 600px;
      margin-bottom: 1rem;
    }

    img {
      position: absolute;
      top: 2px;
      right: 80px;
      width: 50px;
      transform: rotate(20deg);
      border-radius: 50%;

      @media (max-width: 768px) {
        top: 20px;
        right: 10px;
        width: 30px;
      }
    }
  }
`;

const Section = styled.section`
  padding: 3rem 0;

  .heading {
    max-width: 1200px;
    margin: 0 auto;
    h2 {
      font-size: 2.5rem;
      margin: 1rem 0;

      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1rem;
    }

    &.heading-creators {
      text-align: center;
    }
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto 6rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(350px, max-content);
      margin: 2rem auto;
    }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1.5rem 2rem;
      border-radius: 30px;
      background: var(--bg-light);
      border: var(--border-medium);

      i {
        color: inherit;
        opacity: 0.8;
        padding: 1rem;
        font-size: 3.5rem;
        border-radius: 5px;
      }

      h3 {
        font-size: 2rem;
        font-weight: 600;
      }

      p {
        font-size: 1.1rem;
        padding: 0.5rem 0;
      }

      &:hover i {
        transform: translateX(5%) translateY(-10px);
      }

      &:nth-child(1) {
        border: 1px solid var(--primary-color);

        i {
          color: var(--primary-color);
        }
      }

      &:nth-child(2) {
        transform: translateY(100px);
        i {
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          transform: translateY(0px);
        }
      }

      &:nth-child(3) {
        i {
          color: var(--secondary-color);
        }
      }

      &:nth-child(4) {
        border: 1px solid var(--primary-color);
        transform: translateY(100px);
        i {
          color: var(--primary-color);
        }
        @media (max-width: 768px) {
          transform: translateY(0px);
        }
      }
    }
  }
`;

// Creators
const Creators = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .user {
    padding: 1rem;

    .user-image {
      width: 300px;
      height: 300px;
      border-radius: 10%;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding: 150px;
      }
    }

    h2 {
      margin: 1rem 0 0;
      font-size: 1rem;
      color: var(--secondary-color);
      font-weight: 400;
    }

    h3 {
      font-size: 2rem;
      padding: 0.2rem 0;
    }

    p {
      font-size: 0.9rem;
      padding: 0 3rem;
    }

    @media (max-width: 768px) {
      h3 {
        font-size: 1.1rem;
      }
    }
  }
`;

const FooterCta = styled.section`
  background: var(--secondary-color);
  padding: 2rem 4rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-light);
  min-height: 200px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2.3rem 1.5rem 2rem;
  }

  &:hover i {
    transform: translateX(5%) translateY(10px);
  }

  .footercta-icon {
    i {
      position: absolute;
      top: -37px;
      right: 40px;
      font-size: 3rem;
      background: var(--secondary-color);
      padding: 1rem;
      border-radius: 50%;

      @media (max-width: 600px) {
        top: -27px;
        font-size: 2rem;
      }
    }
  }

  h3 {
    font-size: 3rem;
    letter-spacing: -0.1rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 1.5rem;
      letter-spacing: 0;
    }

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.1rem;
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }

  .btn {
    background: #fff;
    color: var(--secondary-color);
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
`;
