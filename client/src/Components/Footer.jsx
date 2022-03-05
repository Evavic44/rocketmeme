import React from "react";
import styled from "styled-components";
import "lazysizes";

function Footer() {
  return (
    <Container>
      <Content>
        <Social>
          <div>
            <a href="/" className="logo">
              <img
                className="lazyload"
                data-src="/images/logo.svg"
                alt="Logo"
              />
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
            className="lazyload"
            data-src="/images/bmc-button.png"
            alt="buymeacoffee"
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
  background-color: #020202;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23070707' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%230c0c0c' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23101010' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23151515' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%231A1A1A' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23181818' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23161616' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23141414' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23121212' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23101010' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 500px) {
    background: var(--bg-dark);
  }

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
