import '../OptionsHeader/styles.css';
const textOptions = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS']; // Array que será utilizada na 'li'

function OptionsHeader() {
  return (
     <ul className='options'>
        {textOptions.map((text) => //o 'text' representa cada um dos itens do array 'textOptions' e o 'map' itera sobre cada um deles (passa opçao por opção na array 'textOptions')
        <li className='option'><p>{text}</p></li>
        )}
    </ul>
  )
};

export default OptionsHeader;
