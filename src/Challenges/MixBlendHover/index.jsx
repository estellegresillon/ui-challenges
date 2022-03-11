import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const MixBlendHover = () => {
  const heroScene = useRef(null);
  const blueRef = useRef(null);
  const pinkRef = useRef(null);
  const yellowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    blueRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    pinkRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    yellowRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
  }, []);

  useEffect(() => {
    const section = heroScene.current;
    section.addEventListener("mousemove", handleMouseMove, false);

    return () =>
      section.removeEventListener("mousemove", handleMouseMove, false);
  }, [handleMouseMove]);

  return (
    <MixBlendHoverWrapper ref={heroScene}>
      <CursorShapesWrapper>
        <div ref={blueRef} className="hero-shape-item blue" />
        <div ref={pinkRef} className="hero-shape-item pink" />
        <div ref={yellowRef} className="hero-shape-item red" />
      </CursorShapesWrapper>
      <div className="hero-blend">
        <h1>Mix-blend mode hover effect</h1>
      </div>
      <div className="dot blue-dot-center" />
      <div className="dot blue-dot-bottom" />
      <div className="dot blue-dot-right" />
      <div className="dot purple-dot-top" />
      <div className="dot purple-dot-right" />
      <div className="dot purple-dot-bottom" />
      <div className="dot green-dot-left" />
      <div className="dot green-dot-right" />
      <div className="dot green-dot-top" />
    </MixBlendHoverWrapper>
  );
};

export default MixBlendHover;

const MixBlendHoverWrapper = styled.div`
  align-items: center;
  color: #2128bd;
  display: flex;
  height: 120vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100vw;

  .hero-blend {
    align-items: flex-start;
    background-color: white;
    color: black;
    display: flex;
    height: 100%;
    justify-content: center;
    mix-blend-mode: screen;
    align-items: center;
    width: 100%;

    h1 {
      font-family: "Voyage";
      text-align: center;
      font-size: 90px;
      width: 40%;
    }
  }

  @media screen and (max-width: 820px) {
    .hero-blend h1 {
      font-size: 56px;
      width: 80%;
    }
  }

  @keyframes rotateDots {
    from {
      margin-top: 0px;
      transform: rotate(0deg);
    }
    50% {
      margin-top: 20px;
      transform: rotate(180deg);
    }
    to {
      margin-top: 0px;
      transform: rotate(360deg);
    }
  }

  .dot {
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    opacity: 0.3;
  }

  .blue-dot-center {
    top: 7vh;
    left: 35vw;
    background-color: #638dff;
    transform: rotate(42deg);
    animation: 5s rotateDots infinite linear;
  }

  .blue-dot-right {
    top: 17vh;
    right: 10vw;
    background-color: #638dff;
    transform: rotate(67deg);
    animation: 3s rotateDots infinite;
  }

  .blue-dot-bottom {
    top: 60vh;
    left: 20vw;
    background-color: #638dff;
    transform: rotate(67deg);
    animation: 3s rotateDots infinite;
  }

  .green-dot-left {
    top: 90vh;
    left: 30vw;
    background-color: #3ab6ac;
    transform: rotate(67deg);
    animation: 5s rotateDots infinite linear;
  }

  .green-dot-right {
    top: 75vh;
    right: 4vw;
    background-color: #3ab6ac;
    animation: 3s rotateDots infinite;
  }

  .green-dot-top {
    top: 15vh;
    left: 10vw;
    background-color: #3ab6ac;
    animation: 3s rotateDots infinite;
  }

  .purple-dot-top {
    top: 27vh;
    left: 52vw;
    background-color: #fe765f;
    animation: 5s rotateDots infinite linear;
  }

  .purple-dot-bottom {
    top: 80vh;
    left: 5vw;
    background-color: #fe765f;
    animation: 2s rotateDots infinite;
  }

  .purple-dot-right {
    top: 60vh;
    right: 25vw;
    background-color: #fe765f;
    animation: 2s rotateDots infinite;
  }
`;

const CursorShapesWrapper = styled.div`
  background: #2128bd;
  bottom: -50px;
  contain: strict;
  display: block;
  left: -5px;
  overflow: hidden;
  position: absolute;
  right: -5px;
  top: -10px;

  .hero-shape-item {
    border-radius: 50%;
    left: 0;
    position: absolute;
    top: 0;
    will-change: transform;
    transition: 1s all ease;

    &.blue {
      background: #638dff;
      height: 650px;
      margin: -325px 0 0 -325px;
      width: 650px;
    }

    &.pink {
      background: #3ab6ac;
      height: 440px;
      margin: -220px 0 0 -220px;
      width: 440px;
    }

    &.red {
      background: #fe765f;
      height: 270px;
      margin: -135px 0 0 -135px;
      width: 270px;
    }
  }
`;
