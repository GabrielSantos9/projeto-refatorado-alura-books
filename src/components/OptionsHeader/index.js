import styled from "styled-components";

const textOptions = ["CATEGORIAS", "ESTANTE", "FAVORITOS"]; // Array que será utilizada na 'li'

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
`;

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map(
        (
          text //o 'text' representa cada um dos itens do array 'textOptions' e o 'map' itera sobre cada um deles (passa opçao por opção na array 'textOptions')
        ) => (
          <Option>
            <p>{text}</p>
          </Option>
        )
      )}
    </Options>
  );
}

export default OptionsHeader;
