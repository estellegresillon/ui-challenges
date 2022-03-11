import { useState } from "react";
import styled from "styled-components";

import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";
import CCFormContainer from "./CCFormContainer";

const CreditCardForm = () => {
  const [isCardReversed, setIsCardReversed] = useState(false);
  const [cardBg, setCardBg] = useState(0);
  const [focus, setFocus] = useState("");
  const [cardInfos, setCardInfos] = useState({
    cardNumber: "",
    fullName: "",
    CCV: "",
    month: "",
    year: "",
  });

  const handleCardInfos = (input, value) => {
    setCardInfos({ ...cardInfos, [input]: value });
  };

  return (
    <CreditCardFormWrapper>
      <div className="form-wrapper">
        <div className="credit-card-container">
          <CardFrontSide
            isCardReversed={isCardReversed}
            cardBg={cardBg}
            focus={focus}
            cardInfos={cardInfos}
          />
          <CardBackSide
            isCardReversed={isCardReversed}
            CCV={cardInfos.CCV}
            cardBg={cardBg}
          />
        </div>

        <CCFormContainer
          setIsCardReversed={setIsCardReversed}
          setFocus={setFocus}
          cardBg={cardBg}
          setCardBg={setCardBg}
          handleCardInfos={handleCardInfos}
          cardInfos={cardInfos}
        />
      </div>
    </CreditCardFormWrapper>
  );
};

export default CreditCardForm;

const CreditCardFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-top: 200px;
  width: 100%;
  background: linear-gradient(100deg, #bee9f9, #b6deff);

  .form-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 70%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 20px 70px rgba(50, 50, 93, 0.4);
    margin-top: 60px;

    .credit-card-container {
      position: absolute;
      height: 200px;
      width: 350px;
      top: -100px;
      background-color: transparent;

      .credit-card-front,
      .credit-card-back {
        display: flex;
        flex-direction: column;
        color: white;
        position: absolute;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        transition: 2s;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        background-color: black;
        font-weight: 700;
        box-shadow: 0 20px 30px rgba(50, 50, 93, 0.2);
        background: #ff006a;
      }

      .card-chip,
      .card-logo {
        height: 30px;

        &.back {
          position: absolute;
          bottom: 15px;
          right: 20px;
        }
      }
    }
  }
`;
