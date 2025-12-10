import bag from '../../imgs/sacola.svg';
import profile from '../../imgs/perfil.svg';
import styled from 'styled-components';  

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const iconsOptions = [ bag, profile]; // Array que será utilizada para os ícones na 'li'

function IconsHeader() {
  return (
    <Icons>
      {iconsOptions.map((icon) => // o 'icon' representa cada um dos icones da array 'iconsOptions' e o 'map' itera sobre cada um deles (passa ícone por ícone na array 'iconsOptions')
      <Icon><img src={icon} alt="icons-header"/></Icon>
      )}
    </Icons>
  );
};

export default IconsHeader; 
