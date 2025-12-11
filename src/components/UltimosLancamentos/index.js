import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const TituloContainer = styled.h1`
  font-size: 30px;
  color: black;
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
  background-color: #F6AC24;
  color: wi;
  width: 100%;
  text-align: center;
`;

const ImgLivro = styled.img`
  width: 220px; 
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <TituloContainer>ÚLTIMOS LAÇAMENTOS</TituloContainer>
      <Lancamentos>
      {livros.map((livro) => (
          <Livros>
          <TituloLivro>{livro.nome}</TituloLivro>
          <ImgLivro src={livro.src}/>
          </Livros>
      ))}
      </Lancamentos>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
