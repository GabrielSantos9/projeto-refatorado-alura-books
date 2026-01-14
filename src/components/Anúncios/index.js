import styled from "styled-components";
import imgBook from "../../imgs/livro.png";
import imgPorcentagem from "../../imgs/porcentagem.png";

const AnunciosContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #171717;
  display: flex;
`;

const ImgLivro = styled.img`
  width: 282px;
  height: 406px;
`;

const ImgPorcentagem = styled.img`
  width: 54px;
  height: 22px;
`;

const TituloLivro = styled.h1`
  font-size: 29px;
  color: #fff;
  text-align: center;
  width: 209px;
  height: 34px;
`;

const Subtitulo = styled.h2`
  font-size: 13px;
  color: #C2C2C2;
`;

const PrecoAnterior = styled.span`

`;

function Anuncios() {
  return (
    <AnunciosContainer>
      <ImgPorcentagem src={imgPorcentagem} alt="Ícone de porcentagem" />
      <Subtitulo>EDITORA ALURA</Subtitulo>
      <TituloLivro>Livro Iradissimo</TituloLivro>
      <ImgLivro src={imgBook} alt="Capa do livro" />
      <PrecoAnterior>50,00</PrecoAnterior>
    </AnunciosContainer>
  );
}

export default Anuncios;
