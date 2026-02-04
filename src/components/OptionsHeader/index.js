import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Importa NavLink para navegação entre rotas

const textOptions = ["CATEGORIAS", "FAVORITOS", "ESTANTE"]; // Array que será utilizada na 'li'

const Options = styled.ul`
  display: flex;
  align-items: center;
`;

const Option = styled(NavLink)`
  color: white;
  padding: 0 15px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 0;
    height: 2px;
    background-color: #f6ac24;
    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 80%;
  }

  &.active {
    color: #f6ac24;
  }

  &.active::after {
    width: 80%;
  }
`;

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => ( // Itera sobre cada item do array 'textOptions'
        <Option key={text} to={`/${text.toLowerCase()}`}> {/* Define o link para cada opção */}
          <p>{text}</p> {/* Exibe o texto da opção */}
        </Option>
      ))}
    </Options>
  );
}

//O '<Link>' envolvido ao redor da '<Option>' e dentro do map serve para em cada opção selecionada faça com que navegue nessa opção já com o link alterado, por ex: se clicar na opção Favoritos ele transfira para a página favoritos (http://localhost:3000/favoritos).

//O 'to={`${text}`}': serve para cada opção selecionada altere a página desejada no link, por ex: se clicar em Favoritos no Header vá para a página da opção (http://localhost:3000/favoritos).

//O 'text' representa cada um dos itens do array 'textOptions' e o 'map' itera sobre cada um deles (passa opçao por opção na array 'textOptions'.

//O 'text.toLowerCase()' serve para que o link fique em minusculo,

export default OptionsHeader;
