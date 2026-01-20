import styled from "styled-components";
import imgBook from "../../imgs/livro.png";
import imgPorcentagem from "../../imgs/porcentagem.png";

const AnunciosContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  flex-direction: row;
  position: relative;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anuncio = styled.div`
  display: flex;
  margin-top: 90px;
  width: 700px;
`;

const ImgLivro = styled.img`
  width: 282px;
  height: 406px;
  cursor: pointer;
`;

const ImgPorcentagem = styled.img`
  width: 54px;
  height: 22px;
`;

const TituloLivro = styled.h1`
  font-size: 29px;
  color: #fff;
  text-align: center;
  height: 34px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Subtitulo = styled.h2`
  font-size: 13px;
  color: #c2c2c2;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const PrecoAnterior = styled.span`
  color: #c5c5c5;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 600;
`;

const NovoPreco = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const BotaoCompra = styled.button`
  width: 160px;
  height: 48px;
  background-color: #fd8325;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  border: 0px;
  cursor: pointer;
  margin-top: 25px;
`;

const InformacoesLivro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  align-items: flex-start;
  margin-top: 55px;
`;

const InformacoesPreco = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
`;

const Descricao = styled.div`
  width: 900px;
  height: 100vh;
`;

const TituloDescricao = styled.h1`
  margin: 0px;
  color: #ffffff;
  font-size: 29px;
  font-weight: 700;
  margin-top: 70px;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 3px;
    margin-top: 32px;
    background-color: #fd8325;
  }
`;

const TextoDescricao = styled.p`
  margin: 0;
  color: #fff;
  font-size: 24px;
  height: 168px;
  display: flex;
  margin-top: 30px;
  text-align: start;
`;

function Anuncios() {
  return (
    <AnunciosContainer>
      <Anuncio>
        <ImgLivro src={imgBook} alt="Capa do livro" />
        <InformacoesLivro>
          <Subtitulo>EDITORA ALURA</Subtitulo>
          <TituloLivro>Livro Iradissimo</TituloLivro>
          <InformacoesPreco>
            <ImgPorcentagem src={imgPorcentagem} alt="Ícone de porcentagem" />
            <PrecoAnterior>50,00</PrecoAnterior>
            <NovoPreco>Gratuito</NovoPreco>
          </InformacoesPreco>
          <BotaoCompra>Obter</BotaoCompra>
        </InformacoesLivro>
      </Anuncio>
      <Descricao>
        <TituloDescricao>SINOPSE</TituloDescricao>
        <TextoDescricao>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
          felis sollicitudin mauris.
        </TextoDescricao>
      </Descricao>
    </AnunciosContainer>
  );
}

export default Anuncios;
