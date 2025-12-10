import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    background-color: #333a45;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
