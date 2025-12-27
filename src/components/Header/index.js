import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #000000;
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
       <Logo />
      </Link>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

//O '<Link>' envolvido ao redor do '<Logo>' serve para ao clicar na logo do site ele volte para a Home.

export default Header;
