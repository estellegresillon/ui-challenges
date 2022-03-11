import styled from "styled-components";

const Input = ({
  label,
  id,
  type,
  maxLength,
  placeholder,
  className,
  value,
  onFocus,
  onBlur,
  onChange,
  inputMode,
}) => (
  <InputContainer className="Input-Container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      inputMode={inputMode}
      maxLength={maxLength}
      placeholder={placeholder}
      className={className}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  </InputContainer>
);

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  label {
    font-size: 12px;
    margin-bottom: 5px;
  }

  input {
    width: calc(100% - 30px);
    padding: 15px;
    border: 2px solid #dbdbdb;
    border-radius: 5px;
    font-family: "Gilroy", sans-serif;

    &::placeholder {
      color: #bebebe;
    }
  }
`;
