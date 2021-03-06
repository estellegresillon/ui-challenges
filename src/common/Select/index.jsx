import styled from "styled-components";

const Select = ({
  label,
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  name,
  renderOptions,
  firstOption = null,
}) => (
  <SelectContainer className="Select-Container">
    <label htmlFor={id}>{label}</label>
    <select
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      name={name}
      id={id}
    >
      <option value="">{firstOption || label}</option>
      {renderOptions()}
    </select>
  </SelectContainer>
);

export default Select;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 90%;

  label {
    font-size: 12px;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 15px;
    border: 2px solid #dbdbdb;
    border-radius: 5px;
    font-family: "Gilroy", sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 13px;

    &::placeholder {
      color: #bebebe;
    }
  }
`;
