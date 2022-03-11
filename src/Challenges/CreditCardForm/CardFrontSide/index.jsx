import styled from "styled-components";

import { displayCardNumber, CARD_BACKGROUNDS } from "../utils";

const CardFrontSide = ({ isCardReversed, cardBg, focus, cardInfos }) => (
  <CardFrontWrapper
    className="credit-card-front"
    style={{
      transform: isCardReversed ? "rotateY(180deg)" : "none",
      background: CARD_BACKGROUNDS[cardBg],
    }}
  >
    <div className="cc-front-header">
      <img
        className="card-chip"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
        alt="chip"
      />
      <img
        className="card-logo front"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        alt="visa-logo"
      />
    </div>
    <div
      className={`cc-front-number ${focus === "cardNumber" && "is-focused"}`}
    >
      {displayCardNumber(cardInfos.cardNumber)}
    </div>

    <div className="cc-front-footer">
      <div
        className={`cc-front-footer-name ${
          focus === "fullName" && "is-focused"
        }`}
      >
        <div className="footer-name-label">Card holder</div>
        <div className="cc-front-name">
          {cardInfos.fullName.length > 0 ? cardInfos.fullName : "FULL NAME"}
        </div>
      </div>
      <div
        className={`cc-front-footer-dates ${focus === "date" && "is-focused"}`}
      >
        <div className="footer-dates-label">Expires</div>
        <div className="cc-front-dates">
          <div className="cc-front-month">
            {cardInfos.month.length > 0 ? cardInfos.month : "MM"}
          </div>
          <div>/</div>
          <div className="cc-front-year">
            {cardInfos.year.length > 0 ? cardInfos.year.substring(2) : "YY"}
          </div>
        </div>
      </div>
    </div>
  </CardFrontWrapper>
);

export default CardFrontSide;

const CardFrontWrapper = styled.div`
  .cc-front-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    padding: 10px 20px;
    height: 50px;
  }

  .cc-front-footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;

    &-name {
      border: 1px solid transparent;
      padding: 5px 10px;
      width: 190px;
      border-radius: 5px;

      &.is-focused {
        border-color: #dadada;
      }
    }

    &-dates {
      border: 1px solid transparent;
      padding: 5px 10px;
      width: 60px;
      border-radius: 5px;

      &.is-focused {
        border-color: #dadada;
      }
    }

    .footer-name-label,
    .footer-dates-label {
      text-transform: uppercase;
      opacity: 0.7;
      font-size: 11px;
    }
  }

  .cc-front-dates {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .cc-front-number {
    width: calc(100% - 40px);
    margin: 0 10px;
    font-size: 24px;
    border: 1px solid transparent;
    padding: 10px;
    border-radius: 5px;

    &.is-focused {
      border-color: #dadada;
    }
  }

  .cc-front-name {
    text-transform: uppercase;
  }
`;
