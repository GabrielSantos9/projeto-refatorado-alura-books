import styled from "styled-components";

const Input = styled.input`
  border: 0.125rem solid #1b1b1b;
  background-color: #000000;
  color: #fff;
  width: 30.125rem;
  height: 3.125rem;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  padding-left: 0.625rem;

  &::placeholder {
    color: #999898;
    font-size: 1rem;
    display: flex;
    text-align: start;
  }
`;

export default Input;
