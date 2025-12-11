import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 300px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const ResultadoPesquisa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  cursor: pointer;

  &:hover {
    background-color: #002f52aa;
     transition: 0.7s ease;
  }
`;

const ImgLivro = styled.img`
  width: 120px; 
`;

const TituloLivro = styled.p`
  font-size: 20px;
  padding-left: 15px;
`;
function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]); //como de primeira não há nada pesquisado, o estado inicial é um array vazio

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre o seu livro em nossa estante!</Subtitulo>
      <Input placeholder="Escreva a sua próxima leitura" onBlur={evento => {
        const textoDigitado = evento.target.value //pega o valor digitado no input pelo usuário
        const resultadosPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado)) //O 'filter' filtra os livros que contém o texto digitado no nome. Como ele filtra o livro pesquisado? o 'filter' vai percorrer o array 'livros' e para cada 'livro', ele verifica se o nome do livro (livro.nome) inclui o texto digitado (textoDigitado). Se incluir, esse livro é adicionado ao novo array 'resultadosPesquisa'. 
        // O 'includes' verifica se o texto digitado está presente no nome do livro.
        setLivrosPesquisados(resultadosPesquisa) //atualiza o estado livrosPesquisados com os resultados da pesquisa.
      } } />
      {livrosPesquisados.map(livro => ( //passa livro por livro na array livrosPesquisados para exibir os livros encontrados na pesquisa
        <ResultadoPesquisa>
          <TituloLivro>{livro.nome}</TituloLivro> {/* exibe o nome do livro encontrado */}
          <ImgLivro src={livro.src}/> {/* exibe a imagem do livro encontrado */}
        </ResultadoPesquisa>
      ))}
    </PesquisaContainer>
  );
}

//'onBlur' é disparado quando o elemento perde o foco, quando clicamos fora do input por exemplo. Ele é usado aqui para atualizar o estado textoDigitado com o valor atual do input quando o usuário termina de digitar e sai do campo. Pode ser utilizado como uma função que nem no caso acima, onde sempre quando o usuario digitar algo e clicar fora do input, o valor digitado será salvo no estado textoDigitado e será exibido na tela dentro do <h1>.

//'event.target.value' é usado para pegar o valor atual de um elemento que disparou um evento.
export default Pesquisa;
