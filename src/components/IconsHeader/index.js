import bag from '../../imgs/sacola.svg';
import profile from '../../imgs/perfil.svg';
import '../IconsHeader/styles.css';

const iconsOptions = [ bag, profile]; // Array que será utilizada para os ícones na 'li'

function IconsHeader() {
  return (
    <ul className="icons">
      {iconsOptions.map((icon) => // o 'icon' representa cada um dos icones da array 'iconsOptions' e o 'map' itera sobre cada um deles (passa ícone por ícone na array 'iconsOptions')
      <li className='icon'><img src={icon}/></li>
      )}
    </ul>
  );
};

export default IconsHeader; 
