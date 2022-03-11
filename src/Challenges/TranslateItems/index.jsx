import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CONTACT_ICONS = [
  "burger",
  "lobster",
  "salad",
  "ice-cream",
  "pizza",
  "pasta",
];

const TranslateItems = () => {
  const contactIconContainer = useRef(null);
  const contactContainer = useRef(null);
  const contactTitle = useRef(null);

  const moveContactElements = (e) => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    contactIconContainer.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.07
    },${distanceFromMiddleY * 0.08},0,1)`;
    contactTitle.current.style.transform = `matrix3d(1,0,0.00,${
      distanceFromMiddleX * 0.000002
    },0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.08},${
      distanceFromMiddleY * -0.08
    },0,1)`;
  };

  useEffect(() => {
    const container = contactContainer.current;
    container.addEventListener("mousemove", moveContactElements, false);
    return () =>
      container.removeEventListener("mousemove", moveContactElements, false);
  }, []);

  return (
    <ContactWrapper ref={contactContainer}>
      <div
        className="gradient-stroke"
        ref={contactTitle}
        id="home-contact-title"
      >
        This text get moved and distorted on mouse move
      </div>
      <button className="go-to-contact">
        <span className="btn-first-text">get free bitcoins</span>
        <span className="btn-second-text">get free bitcoins</span>
      </button>

      <IconContainer ref={contactIconContainer}>
        {CONTACT_ICONS.map((icon) => (
          <img
            key={icon}
            className={`contact-${icon}`}
            src={`contact-${icon}.svg`}
            alt={`${icon}-animation`}
          />
        ))}
      </IconContainer>
    </ContactWrapper>
  );
};

export default TranslateItems;

const ContactWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 0 20% 10% 20%;
  overflow: hidden;

  .gradient-stroke {
    background: #272a98;
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
    color: white;
    font-size: 56px;
    font-weight: 900;
    width: 60vw;
    height: auto;
    transition: 1s all ease;

    @media screen and (max-width: 820px) {
      font-size: 42px;
      width: 80%;
    }
  }

  @keyframes slideToRightText {
    from {
      left: -182px;
    }
    to {
      left: 230px;
    }
  }

  .go-to-contact {
    position: relative;
    overflow: hidden;
    z-index: 999;
    background: #fe765f;
    border: none;
    height: 52px;
    width: 230px;
    border-radius: 32px;
    cursor: pointer;
    font-family: Gilroy, sans-serif;
    font-weight: bolder;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    font-size: 12px;
    margin-top: 50px;
    -webkit-font-smoothing: antialiased;
    transition: 0.5s all ease;

    &:hover {
      background-color: #ea4529;
    }

    .btn-first-text,
    .btn-second-text {
      position: absolute;
      top: 19px;
      width: 200px;
    }

    .btn-first-text {
      left: -182px;
      animation: slideToRightText 8s linear infinite;
    }

    .btn-second-text {
      left: -182px;
      animation: slideToRightText 8s linear infinite;
      animation-delay: 4s;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  transition: 1s all ease;

  img {
    position: absolute;
    height: 50px;
    width: auto;

    &.contact-burger {
      top: 25vh;
      left: 30vw;
      transform: rotate(42deg);
    }

    &.contact-lobster {
      top: 55vh;
      left: 15vw;
      transform: rotate(30deg);
    }

    &.contact-salad {
      top: 85vh;
      left: 30vw;
      transform: rotate(-42deg);
    }

    &.contact-ice-cream {
      top: 25vh;
      right: 30vw;
      transform: rotate(-42deg);
    }

    &.contact-pizza {
      top: 55vh;
      right: 15vw;
      transform: rotate(2deg);
    }

    &.contact-pasta {
      top: 85vh;
      right: 30vw;
      transform: rotate(42deg);
    }

    @media screen and (max-width: 820px) {
      &.contact-burger,
      &.contact-ice-cream {
        top: 15vh;
      }

      &.contact-salad,
      &.contact-pasta {
        top: 75vh;
      }

      &.contact-lobster,
      &.contact-pizza {
        top: 45vh;
      }
    }
  }
`;
