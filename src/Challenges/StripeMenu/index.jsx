import { useRef } from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "./utils";

const StripeMenu = () => {
  const backgroundRef = useRef(null);
  const navRef = useRef(null);

  return (
    <StripeMenuWrapper>
      <nav ref={navRef}>
        <div ref={backgroundRef} className="dropdownBackground">
          <span className="arrow"></span>
        </div>

        <ul className="menu-item">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              nav={navRef}
              background={backgroundRef}
            />
          ))}
        </ul>
      </nav>
      <div className="stripe-menu-text">
        <h1>
          sticky
          <i className="fas fa-arrow-circle-up" />
          menu
        </h1>
        <h2>inspired by Stripe</h2>
      </div>
    </StripeMenuWrapper>
  );
};

export default StripeMenu;

const StripeMenuWrapper = styled.div`
  align-items: center;
  background-color: pink;
  background: url(mesh-hero-small.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .stripe-menu-text {
    margin-top: 20vh;
    text-align: center;

    h1 {
      font-size: 110px;
      font-weight: bolder;
      margin-bottom: 10px;

      i {
        font-size: 64px;
        margin: 0 20px;
      }
    }

    .go-back-button {
      position: absolute;
      padding: 10px 20px;
      border: 1px solid black;
      border-radius: 50px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 700;
      text-decoration: none;
      color: white;
      box-shadow: 0 10px 50px rgba(50, 50, 93, 0.3);
      background-color: black;
      transition: box-shadow 0.5s ease;

      &:hover {
        background-color: red;
        border-color: red;
        color: white;
        box-shadow: 0 20px 50px rgba(50, 50, 93, 0.5);
      }
    }
  }

  nav {
    position: relative;
    perspective: 600px;
    z-index: 2;

    .menu-item {
      li {
        position: relative;
        display: flex;
        justify-content: center;

        .menu-item-title {
          cursor: pointer;
          font-size: 14px;
          padding: 10px 20px;
          display: inline-block;
          font-weight: 700;
          letter-spacing: 3px;
          margin: 40px;
          text-transform: uppercase;
          white-space: nowrap;
        }
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
    }
  }

  .dropdown {
    opacity: 0;
    position: absolute;
    overflow: hidden;
    padding: 20px 30px;
    top: -10px;
    color: #750f87;
    border-radius: 2px;
    transition: all 0.5s;
    transform: translateY(100px);
    will-change: opacity;
    display: none;
    font-weight: 300;
    font-size: 14px;

    &.Skills {
      min-width: 200px;
    }

    &.About,
    &.Contact {
      min-width: 150px;
    }
  }

  .trigger-enter .dropdown {
    display: block;
  }

  .trigger-enter-active .dropdown {
    opacity: 1;
  }

  .dropdownBackground {
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 20px 100px rgba(50, 50, 93, 0.2);
    transition: all 0.3s, opacity 0.1s, transform 0.2s;
    transform-origin: 50% 0;
    display: flex;
    justify-content: center;
    opacity: 0;
  }

  .dropdownBackground.open {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    display: block;
    background: white;
    transform: translateY(-50%) rotate(45deg);
  }
`;
