import { livros } from "./dadosUltimosLancamentos";
import { TituloContainer } from "../Titulo";
import CardRecomendacao from "../CardRecomandacao";
import imagemLivro from "../../imgs/livro2.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Lancamentos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Livros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const TituloLivro = styled.h1`
  font-size: 20px;
  background-color: #f6ac24;
  width: 100%;
  text-align: center;
`;

const ImgLivro = styled.img`
  width: 220px;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <TituloContainer cor="#000" tamanhoFonte="30px">
        ÚLTIMOS LAÇAMENTOS
      </TituloContainer>
      <Lancamentos>
        {livros.map((livro) => (
          <Livros>
            <TituloLivro>{livro.nome}</TituloLivro>
            <ImgLivro src={livro.src} />
          </Livros>
        ))}
      </Lancamentos>
      <CardRecomendacao
        descricao="Construindo uma aplicação com a plataforma Google."
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
