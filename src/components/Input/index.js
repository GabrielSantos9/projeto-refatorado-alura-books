import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #1b1b1b;
  background-color: #000000;
  color: #fff;
  width: 482px;
  height: 50px;
  font-size: 16px;
  margin-bottom: 10px;
  padding-left: 10px;

  &::placeholder {
    color: #999898;
    font-size: 16px;
    display: flex;
    text-align: start;
  }
`;

export default Input;
