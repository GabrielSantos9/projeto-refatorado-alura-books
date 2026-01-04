import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import {postFavorito} from "../../servicos/favoritos";
import IMGLivro from "../../imgs/livro.png";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  padding: 85px 0;
  height: 300px;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const TotalRes = styled.div`
  flex-direction: column;
  width: 492px;
  font-size: 16px;
  position: absolute;
  z-index: 2;
  top: 305px;
  display: flex;
  background-color: black;
`;

const ResultadoPesquisa = styled.div`
  text-align: start;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #002f52aa;
    transition: 0.7s ease;
  }
`;

const ImgLivro = styled.img`
  width: 40px;
`;

const TituloLivro = styled.p`
  font-size: 20px;
  padding-left: 15px;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]); //como de primeira não há nada pesquisado, o estado inicial é um array vazio.
  const [livros, setLivros] = useState([]); //como de primeira não há nada pesquisado no 'setLivros', o estado inicial é um array vazio.

  useEffect(() => {
    fetchLivros();
  }, []); //'()' quando não há nada dentro da função ele passa ser uma função vazia. '() => {}, []' é uma function com o segundo parâmetro([]). Queremos chamar a API de 'livros' para pegar os dados assim que a tela carregar para acessar esses dados e salvar no estado.

  //Função assync para funcionar no 'useEffect', pois o const e set livros direto no useE... não irá funcionar por ser regra sintaxe:
  async function fetchLivros() {
    const LivrosDaAPI = await getLivros(); //Pegará os livros da API.
    setLivros(LivrosDaAPI); //Adicionará os livros da API no estado setLivros.
  }
  //fetch: atualizar.
  //Dentro dessa função será passado o get e o estado onde está os livros.
  //O 'async' (assincronismo): ele faz com que a o código da função trabalhe em tempos diferentes.
  //O 'await' (esperar): enquanto houver o tempo de espera. Aonde é adicionado o await, o código tem que esperar o resultado chegar para depois seguir adiante para o próximo código (que nesse caso seria o 'return response.data)

async function insertFavorito(id) {
  await postFavorito(id)
  alert(`Livro de id:${id} inserido com sucesso!`);
}

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre o seu livro em nossa estante!</Subtitulo>
      <Input
        placeholder="Pesquise o livro"
        onChange={(evento) => {
          const textoDigitado = evento.target.value; //pega o valor digitado no input pelo usuário.

          if (textoDigitado.length === 0) {
            //Caso não seja digitado nada pelo usuário não apareça nenhum resultado.
            setLivrosPesquisados([]);
            return;
          }

          const resultadosPesquisa = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
          ); //O 'filter' filtra os livros que contém o texto digitado no nome. Como ele filtra o livro pesquisado? o 'filter' vai percorrer o array 'livros' e para cada 'livro', ele verifica se o nome do livro (livro.nome) inclui o texto digitado (textoDigitado). Se incluir, esse livro é adicionado ao novo array 'resultadosPesquisa'.
          // O 'includes' verifica se o texto digitado está presente no nome do livro.
          setLivrosPesquisados(resultadosPesquisa); //atualiza o estado livrosPesquisados com os resultados da pesquisa.
        }}

        //passa livro por livro na array livrosPesquisados para exibir os livros encontrados na pesquisa.
      />
      <TotalRes>
        {livrosPesquisados.map((livro) => (
          <ResultadoPesquisa onClick={() => insertFavorito(livro.id)}>
            <ImgLivro src={IMGLivro} />
            {/* exibe a imagem do livro encontrado. */}
            <TituloLivro>{livro.nome}</TituloLivro>
            {/* exibe o nome do livro encontrado. */}
          </ResultadoPesquisa>
        ))}
      </TotalRes>
    </PesquisaContainer>
  );
}

//insertFavorito(livro.id): tira o id do livro, via map.

//'onBlur' é disparado quando o elemento perde o foco, quando clicamos fora do input por exemplo. Ele é usado aqui para atualizar o estado textoDigitado com o valor atual do input quando o usuário termina de digitar e sai do campo. Pode ser utilizado como uma função que nem no caso acima, onde sempre quando o usuario digitar algo e clicar fora do input, o valor digitado será salvo no estado textoDigitado e será exibido na tela dentro do <h1>.

//'event.target.value' é usado para pegar o valor atual de um elemento que disparou um evento.

//Anteriormente para puxarmos algum dado de livro nós usada o dadosPesquisa.js, do 'import { livros } from "./dadosPesquisa.js' porém, como agora vamos puxar os dados dos livros da API do 'alura-books-server' pode tirar esse import anterior.
export default Pesquisa;
