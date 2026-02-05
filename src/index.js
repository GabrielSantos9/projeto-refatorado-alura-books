import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./rotas/Home";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoritos from "./rotas/Favoritos";
import Error503 from "./components/Error 503";
import Error404 from "./components/Error 404";
import { keyframes } from "styled-components";
import Livro from "./rotas/Livros";

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -90px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    animation: ${fadeDown} 0.6s ease forwards;
  animation-delay: 0.2s;
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  li {
    list-style: none;
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    font-family: 'Roboto', sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root")); // ponto de entrada da aplicação
root.render( //Aqui dentro vão os componentes que eu quero renderizar na tela
  <React.StrictMode> {/*Ajuda a encontrar problemas na aplicação*/}
    <GlobalStyle /> {/*Estilos globais da aplicação*/}
    <BrowserRouter> {/*Ele é o encapsulador das rotas, ele que permite que as rotas existam.*/}
      <Header /> {/*Componente de cabeçalho que aparece em todas as páginas*/}
      <Routes> {/*É um "anunciador" que existirá rotas.*/}
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/categorias" element={<Error503 />} />
        <Route path="/estante" element={<Error503 />} />
        <Route path="/livro/:id" element={<Livro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// O 'Route' é a rota.

reportWebVitals(); //função para medir o desempenho da aplicação
