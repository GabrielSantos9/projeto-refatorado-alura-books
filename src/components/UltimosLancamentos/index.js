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
  background-color: #171717;
`;

const Livros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Lancamentos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.25rem;
  background-color: #1c1c1c;
  min-width: 70%;
  max-width: 100%;
  justify-content: center;
  border-radius: 1.5625rem;

  &:has(${Livros}:hover) ${Livros}:not(:hover) {
    filter: blur(0.25rem);
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export const TituloLivro = styled.h1`
  font-size: 1.25rem;
  background-color: #f6ac24;
  width: 100%;
  text-align: center;
  color: #1c1c1c;
`;

const ImgLivro = styled.img`
  width: 13.75rem;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <TituloContainer cor="#ffffff" tamanhoFonte="30px">
        ÚLTIMOS LANÇAMENTOS
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
