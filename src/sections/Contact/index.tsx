import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

export function Contact() {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Contato</h1>
        </Slide>
        <div className="links">
          <div className="buttonRedirect">
            <span>
              <IoLogoWhatsapp />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">Enviar uma mensagem</a>
            </Slide>
          </div>
          <div className="buttonRedirect">
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">ferreirazdev@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols={30} rows={10} placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;

  .links {
    margin-top: 1rem;
    h1 {
      font-size: 0.5rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-align: center;
        text-decoration: none;
        color: #fff;
        font-size: 0.8rem;
        font-family: 'Roboto', sans-serif;
         letter-spacing: 1px;
      }
    }

    .buttonRedirect {
      padding: 0.4rem 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      background-color: #01be96;
      width: 45%;
      border: none;
      color: #fff;
      filter: drop-shadow(0px 10px 10px #01be9551);
      :hover {
        filter: drop-shadow(0px 10px 10px #01be9570);
      }
      @media (max-width: 650px) {
        width: 100%
      }
    }
  }

  .profiles {
    @media (max-width: 650px) {
      display: flex;
      align items: center;
      justify-content: center;
    }
    margin-top: 1rem;
    h1 {
      font-size: 0.5rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #01be96;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    color: #fff;
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid #fff;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;