import imgBook from "../../imgs/livro.png";
import styled from "styled-components";

const AnunciosContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #171717;
`;

const ImgLivro = styled.img`
  width: 282px;
  height: 406px;
`;

const TituloLivro = styled.h1`
  font-size: 29px;
  color: #fff;
  text-align: center;
  width: 209px;
  height: 34px;
`;

function Anuncios() {
  return (
    <AnunciosContainer>
      <TituloLivro>Livro Iradissimo</TituloLivro>
      <ImgLivro src={imgBook} alt="Capa do livro" />
    </AnunciosContainer>
  );
}

export default Anuncios;
