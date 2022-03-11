import styled from "styled-components";

import Input from "common/Input";
import Select from "common/Select";
import { addSpaces, MONTHS, createYears } from "../utils";

const CCFormContainer = ({
  setIsCardReversed,
  setFocus,
  cardBg,
  setCardBg,
  cardInfos,
  handleCardInfos,
}) => (
  <CCFormWrapper className="CCForm-container">
    <Input
      label="Credit card number"
      id="ccn"
      type="tel"
      inputMode="numeric"
      maxLength="19"
      placeholder="XXXX XXXX XXXX XXXX"
      className="card-number-input"
      value={addSpaces(cardInfos.cardNumber)}
      onChange={(e) => handleCardInfos("cardNumber", e.target.value)}
      onFocus={() => setFocus("cardNumber")}
      onBlur={() => setFocus("")}
    />
    <Input
      label="Full name"
      id="fullName"
      type="text"
      maxLength="27"
      placeholder="Full name"
      className="full-name-input"
      value={cardInfos.fullName}
      onFocus={() => setFocus("fullName")}
      onBlur={() => setFocus("")}
      onChange={(e) => handleCardInfos("fullName", e.target.value)}
    />

    <div className="CCForm-section">
      <Input
        label="CCV"
        id="ccv"
        type="tel"
        inputMode="numeric"
        maxLength="3"
        placeholder="XXX"
        className="ccv-input"
        value={cardInfos.CCV}
        onChange={(e) => handleCardInfos("CCV", e.target.value)}
        onFocus={() => setIsCardReversed(true)}
        onBlur={() => setIsCardReversed(false)}
      />

      <div className="month-year">
        <Select
          label="Month"
          value={cardInfos.month}
          onChange={(e) => handleCardInfos("month", e.target.value)}
          onFocus={() => setFocus("date")}
          onBlur={() => setFocus("")}
          name="month"
          id="month-select"
          renderOptions={() =>
            MONTHS.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))
          }
        />
        <Select
          label="Year"
          value={cardInfos.year}
          onChange={(e) => handleCardInfos("year", e.target.value)}
          onFocus={() => setFocus("date")}
          onBlur={() => setFocus("")}
          name="year"
          id="year-select"
          renderOptions={() =>
            createYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))
          }
        />
      </div>
    </div>

    <div className="disclaimer">
      Fill the inputs to see the component in action.
    </div>

    <div className="cc-form-footer">
      <div onClick={() => setCardBg(cardBg === 4 ? 0 : cardBg + 1)}>
        Change card style
      </div>
    </div>
  </CCFormWrapper>
);

export default CCFormContainer;

const CCFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  width: calc(100% - 100px);
  padding: 50px;

  .full-name-input {
    text-transform: capitalize;
  }

  .CCForm-section {
    width: 100%;
    display: flex;
    align-items: center;

    .Input-Container {
      width: 30%;
      margin-right: 22px;
    }

    .month-year {
      width: 70%;
      display: flex;
      align-items: center;

      .Select-Container {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }

  .disclaimer {
    margin-top: 20px;
    font-size: 12px;
  }

  .cc-form-footer {
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 10px;

    a,
    div {
      padding: 10px 20px;
      color: white;
      text-decoration: none;
      font-weight: 700;
      text-transform: uppercase;
      background-color: black;
      font-size: 11px;
      cursor: pointer;
      border-radius: 50px;
      margin: 5px;

      &:hover {
        background-color: #656565;
      }
    }
  }
`;
