import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;

  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background-color: #1c1c1c;
`;

const Titulo = styled.h1`
  color: #f6ac24;
  font-size: 8.5rem;
  margin-bottom: -1.25rem;
`;

const Subtitulo = styled.h2`
  font-size: 1.75rem;
  background-color: #f6ac24;
`;

const Paragrafo = styled.p`
  color: white;
  font-size: 1.5rem;
  width: 38.75rem;
`;

const Button = styled.a`
  padding: 0.625rem 1.25rem;
  border-radius: 0.625rem;
  background-color: #f6ac24;
  color: #1c1c1c;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: #ffb731a0;
    transition: 0.3s;
    cursor: pointer;
  }
`;

function Error503() {
  return (
    <AppContainer>
      <Titulo>Ops!</Titulo>
      <Subtitulo>503 - SERVIÇO INDISPONÍVEL</Subtitulo>
      <Paragrafo>
        A página requisitada está em manutenção no momento. Por favor, tente
        novamente mais tarde.
      </Paragrafo>
      <Button href="http://localhost:3000/">Visitar a Home</Button>
    </AppContainer>
  );
}

export default Error503;
