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
import Livro from "./rotas/Livros";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/categorias" element={<Error503 />} />
        <Route path="/estante" element={<Error503 />} />
        <Route path="/livro/:id" element={<Livro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// O 'BrowserRouter' ele é o encapsulador das rotas, ele que permite que as rotas existam.
// O 'Routes' é um "anunciador" que existirá rotas.
// O 'Route' é a rota.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
