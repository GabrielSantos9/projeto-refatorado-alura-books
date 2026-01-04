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
  font-size: 136px;
  margin-bottom: -20px;
`;

const Subtitulo = styled.h2`
  font-size: 28px;
  background-color: #f6ac24;
`;

const Paragrafo = styled.p`
  color: white;
  font-size: 24px;
  width: 620px;
`;

const Button = styled.a`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f6ac24;
  color: #1c1c1c;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: #ffb731a0;
    transition: .3s;
    cursor: pointer;
  }
`;

function Error404() {
  return (
    <AppContainer>
      <Titulo>Ops!</Titulo>
      <Subtitulo>404 - NÃO ENCONTRADO</Subtitulo>
      <Paragrafo>
        Página não encontrada!
      </Paragrafo>
      <Button href="http://localhost:3000/">Visitar a Home</Button>
    </AppContainer>
  );
}

export default Error404;
