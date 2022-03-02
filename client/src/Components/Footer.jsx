import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <Social>
          <div>
            <a href="/" className="logo">
              <img src="/images/logo.svg" alt="Logo" loading="lazy" />
            </a>

            <p>Collection of interesting and funny programming memes.</p>
          </div>

          <Icons>
            <p>Follow us on all socials</p>
            <div>
              <a
                href="https://web.facebook.com/evavic44"
                title="Facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/evavic44"
                alt="Twitter icon"
                title="Twitter"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/evavic44"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Evavic44/rocketmeme"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="eke.hashnode.dev/"
                title="Hashnode"
                aria-label="Hashnode"
              >
                <i className="fab fa-hashnode"></i>
              </a>
            </div>
          </Icons>
        </Social>

        {/* Footer links */}
        <FooterLink>
          <div className="footer-categories">
            <h3>Categories</h3>
            <a href="/">JavaScript</a>
            <a href="/">Programming</a>
            <a href="/">Stackoverflow</a>
            <a href="/">NFT</a>
          </div>

          <div className="footer-resources">
            <h3>Resources</h3>
            <a href="https://github.com/Evavic44/memefy/blob/main/LICENSE">
              License
            </a>
            <a href="https://github.com/Evavic44/memefy/blob/main/CODE_OF_CONDUCT.md">
              Code of Conduct
            </a>
            <a href="https://github.com/Evavic44/memefy/blob/main/CONTRIBUTING.md">
              FAQ
            </a>
            <a href="https://github.com/Evavic44/memefy/blob/main/README.md">
              Docs
            </a>
          </div>

          <div className="footer-about">
            <h3>About Us</h3>
            <a href="/about">About</a>
            <a href="mailto:evavic44@gmail.com">Contact Us</a>
          </div>

          <div className="footer-donate">
            <h3>Donate</h3>
            <a href="https://www.buymeacoffee.com/evavic44">Support our work</a>
            <a href="/">Share</a>
          </div>

          <div className="footer-contribute">
            <h3>Contribute</h3>
            <a href="/">Upload</a>
            <a href="https://github.com/Evavic44/memefy/network/contributors">
              Join Us
            </a>
            <a href="https://github.com/Evavic44/memefy/network/contributors">
              Developers
            </a>
          </div>
        </FooterLink>
      </Content>

      <Masthead>
        <a href="https://www.buymeacoffee.com/evavic44" className="bmc-button">
          <img
            src="https://r6fp86mr.tinifycdn.com/images/bmc-button.png"
            alt="buymeacoffee"
            loading="lazy"
          />
        </a>

        <small>
          Built with <i className="fas fa-heart highlight"></i> by{" "}
          <a href="https://github.com/Evavic44">Eke</a> and{" "}
          <a href="https://github.com/SpiffGreen">Spiff</a>
        </small>
      </Masthead>
    </Container>
  );
}

// Footer
const Container = styled.footer`
  min-height: 400px;
  background-color: var(--bg-dark);
  color: var(--text-light);
  padding: 5rem 1rem 1rem;

  a {
    color: var(--white);
    transition: 0.2s ease-in-out;
  }
`;

// Container width
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

// Social container
const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 0 2rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 0.85rem;
    max-width: 200px;

    @media (max-width: 800px) {
      display: none;
    }
  }

  .logo img {
    margin-bottom: 0.7rem;
  }

  @media (max-width: 1300px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 1rem 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 1rem 2rem;
  }
`;

// Social icons
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  padding-top: 1rem;

  p {
    padding-bottom: 0.5rem;
  }

  & div > a {
    margin-right: 0.2rem;
    border-radius: 4px;
    font-size: 0.98rem;
    border: var(--border-medium);
    padding: 0.5rem 0.7rem;

    &:hover {
      background: #73707e2f;
      color: var(--bg-grey);
    }
  }

  @media (max-width: 1300px) {
    padding-top: 0;
  }
`;

// Footer links
const FooterLink = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 1.5rem;

    h3 {
      margin-bottom: 1rem;
      padding-left: 0.4rem;
      font-size: var(--font-mid);
    }

    a {
      font-size: 0.86rem;
      color: #747272;
      padding: 0.2rem 0.4rem;
      margin: 0.2rem 0;
      transition: 0.2s ease-in-out;

      &:hover {
        background: #111;
        color: var(--white);
        border-radius: 3px;
      }
    }

    @media (max-width: 900px) {
      margin: 1rem;
    }
  }

  /* Nav links responsiveness */
  @media (max-width: 1000px) {
    margin: 0 0 1.7rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

// Masthead
const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;

  small {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  img {
    display: block;
    width: 150px;
    height: 100%;
    margin-bottom: 0.7rem;
  }
`;

export default Footer;
