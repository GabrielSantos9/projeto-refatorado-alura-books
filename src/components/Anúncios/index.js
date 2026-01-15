import styled from "styled-components";
import imgBook from "../../imgs/livro.png";
import imgPorcentagem from "../../imgs/porcentagem.png";

const AnunciosContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  background-color: #171717;
  display: flex;
  `;

const Teste = styled.div`
  display: flex;
  margin-left: 385px;
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
  /* width: 209px; */
  height: 34px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Subtitulo = styled.h2`
  font-size: 13px;
  color: #c2c2c2;
  font-weight: 400;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const PrecoAnterior = styled.span`
  color: #c5c5c5;
  font-size: 12px;
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
  margin-top: 25px;
`;

const InfoTeste = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  align-items: flex-start;
`;

const SemiInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
`;

function Anuncios() {
  return (
    <AnunciosContainer>
      <Teste>
        <ImgLivro src={imgBook} alt="Capa do livro" />
        <InfoTeste>
          <Subtitulo>EDITORA ALURA</Subtitulo>
          <TituloLivro>Livro Iradissimo</TituloLivro>
          <SemiInfo>
            <ImgPorcentagem src={imgPorcentagem} alt="Ícone de porcentagem" />
            <PrecoAnterior>50,00</PrecoAnterior>
            <NovoPreco>Gratuito</NovoPreco>
          </SemiInfo>
          <BotaoCompra>Obter</BotaoCompra>
        </InfoTeste>
      </Teste>
    </AnunciosContainer>
  );
}

export default Anuncios;
