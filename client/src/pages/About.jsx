import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function About() {
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

          <a href="/create" className="btn">
            Start Creating
          </a>
        </motion.div>
      </Header>

      <Figure>
        <img
          src="https://r6fp86mr.tinifycdn.com/images/memefy-editor.webp"
          alt="Illustration of how to use memefy editor"
        />
      </Figure>

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

        <Creators className="user-container">
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/62628408?v=4"
              alt="User image"
            />
            <h2>Founder, Frontend</h2>
            <h3>Victor Eke</h3>
          </div>

          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/73044138?v=4"
              alt="User image"
            />

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
    </Container>
  );
}

const Container = styled.main`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23dfe7f8' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23edf8ea' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e5ecf9' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23edf9d6' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23ecf1fb' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23edfbc2' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f2f5fc' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23eefcae' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23f9fafe' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23eefe9a' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ffffff' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23eeff86' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  min-height: 25rem;
  margin: 7.5rem auto 0;
  padding: 1.3rem 1.5rem;

  .btn {
    background: var(--primary-color);
    color: #fff;
  }

  i {
    transition: 0.3s ease-in-out;
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

const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 7rem 0;
    box-shadow: 2px 5px 50px rgba(0, 0, 0, 0.2);
    width: 1200px;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  background: #fff;
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
    grid-auto-rows: minmax(500px, max-content);
    grid-gap: 2rem;
    max-width: 1100px;
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
      padding: 1.5rem;
      border-radius: 30px;

      &:hover i {
        transform: translateX(5%) translateY(-10px);
      }

      &:nth-child(1) {
        background: #aeaeff;
      }
      &:nth-child(2) {
        background: #ffb0ff;
        transform: translateY(100px);

        @media (max-width: 768px) {
          transform: translateY(0px);
        }
      }
      &:nth-child(3) {
        background: #acf570;
      }
      &:nth-child(4) {
        background: var(--secondary-color);
        transform: translateY(100px);
        @media (max-width: 768px) {
          transform: translateY(0px);
        }
      }

      i {
        color: inherit;
        opacity: 0.4;
        padding: 0.7rem 1rem;
        font-size: 6rem;
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

    img {
      width: 300px;
      border-radius: 10%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    h2 {
      margin: 1rem 0 0;
      font-size: 1rem;
      color: var(--primary-color);
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
  background: var(--primary-color);
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
      background: var(--primary-color);
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
    color: var(--primary-color);
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
`;
