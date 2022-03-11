import times from "lodash/times";
import styled from "styled-components";

import { CARD_BACKGROUNDS } from "../utils";

const CardBackSide = ({ isCardReversed, cardBg, CCV }) => (
  <CardBackWrapper
    className="credit-card-back"
    style={{
      transform: isCardReversed ? "none" : "rotateY(180deg)",
      background: CARD_BACKGROUNDS[cardBg],
    }}
  >
    <div className="black-line" />
    <div className="cc-back-header">
      <div className="cc-back-ccv-name">CCV</div>
      <div className="cc-back-ccv-input">{times(CCV.length, () => "*")}</div>
    </div>
    <div className="cc-back-footer">
      <img
        className="card-logo back"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        alt="visa-logo"
      />
    </div>
  </CardBackWrapper>
);

export default CardBackSide;

const CardBackWrapper = styled.div`
  .black-line {
    height: 40px;
    width: 100%;
    margin-top: 30px;
    background: linear-gradient(90deg, rgb(68, 68, 68), black);
    opacity: 0.8;
  }

  .cc-back-header {
    margin-top: 0;
  }

  .cc-back-ccv-name {
    color: white;
    margin: 20px 20px 5px 20px;
  }

  .cc-back-ccv-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    background-color: white;
    border-radius: 5px;
    color: #333333;
    height: 30px;
    width: 55px;
    font-size: 12px;
    letter-spacing: 2px;
    padding-top: 3px;
  }

  .cc-back-footer {
    width: 100%;
    position: relative;
  }
`;
