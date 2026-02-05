import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import IMGLivro from "../../imgs/livro.png";
import { useNavigate } from "react-router-dom";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  padding: 5.3125rem 0;
  height: 18.75rem;
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
  font-size: 2.25rem;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.9375rem;
`;

const TotalRes = styled.div`
  flex-direction: column;
  width: 30.75rem;
  font-size: 1rem;
  position: absolute;
  z-index: 2;
  top: 19.0625rem;
  display: flex;
  background-color: black;
`;

const ResultadoPesquisa = styled.div`
  text-align: start;
  cursor: pointer;
  height: 3.75rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #002f52aa;
    transition: 0.7s ease;
  }
`;

const ImgLivro = styled.img`
  width: 2.5rem;
`;

const TituloLivro = styled.p`
  font-size: 1.25rem;
  padding-left: 0.9375rem;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]); //como de primeira não há nada pesquisado, o estado inicial é um array vazio.
  const [livros, setLivros] = useState([]); //como de primeira não há nada pesquisado no 'setLivros', o estado inicial é um array vazio.
  const navigate = useNavigate(); //Hook do 'react-router-dom' que permite a navegação programática entre rotas, com ele podemos redirecionar o usuário para diferentes páginas com base em ações ou eventos.

  useEffect(() => {
    fetchLivros();
  }, []); //'()' quando não há nada dentro da função ele passa ser uma função vazia. '() => {}, []' é uma function com o segundo parâmetro([]). Queremos chamar a API de 'livros' para pegar os dados assim que a tela carregar para acessar esses dados e salvar no estado.

  //Função assync para funcionar no 'useEffect', pois o 'useEffect' não aceita funções assíncronas diretamente.
  async function fetchLivros() {
    const LivrosDaAPI = await getLivros(); //Pegará os livros da API.
    setLivros(LivrosDaAPI); //Adicionará os livros da API no estado setLivros.
  }
  //fetch: atualizar.
  //Dentro dessa função será passado o get e o estado onde está os livros.
  //O 'async' (assincronismo): ele faz com que a o código da função trabalhe em tempos diferentes.
  //O 'await' (esperar): enquanto houver o tempo de espera. Aonde é adicionado o await, o código tem que esperar o resultado chegar para depois seguir adiante para o próximo código (que nesse caso seria o 'return response.data)

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
            setLivrosPesquisados([]); //atualiza o estado livrosPesquisados para um array vazio.
            return;
          }

          const resultadosPesquisa = livros.filter(
            (
              livro, //cria uma nova array 'resultadosPesquisa' que contém os livros que correspondem ao texto digitado.
            ) => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()), //faz a busca ser case insensitive, ou seja, não diferencia maiúsculas de minúsculas.
          ); //O 'filter' filtra os livros que contém o texto digitado no nome. Como ele filtra o livro pesquisado? o 'filter' vai percorrer o array 'livros' e para cada 'livro', ele verifica se o nome do livro (livro.nome) inclui o texto digitado (textoDigitado). Se incluir, esse livro é adicionado ao novo array 'resultadosPesquisa'.
          // O 'includes' verifica se o texto digitado está presente no nome do livro.
          setLivrosPesquisados(resultadosPesquisa); //atualiza o estado livrosPesquisados com os resultados da pesquisa.
        }}
      />
      <TotalRes>
        {livrosPesquisados.map(
          (
            livro, //mapeia o array livrosPesquisados para exibir cada livro encontrado na pesquisa.
          ) => (
            <ResultadoPesquisa
              onClick={() => {
                navigate(`/livro/${livro.id}`); //navega para a página do livro específico quando o resultado da pesquisa é clicado.
              }}
            >
              <ImgLivro src={IMGLivro} />
              {/* exibe a imagem do livro encontrado. */}
              <TituloLivro>{livro.nome}</TituloLivro>
              {/* exibe o nome do livro encontrado. */}
            </ResultadoPesquisa>
          ),
        )}
      </TotalRes>
    </PesquisaContainer>
  );
}

//insertFavorito(livro.id): tira o id do livro, via map e passa para a função insertFavorito que está no arquivo 'Livro/index.js' para adicionar o livro aos favoritos.

//'onChange' é um evento que é disparado sempre que o valor de um elemento é alterado. No caso do input, ele é acionado sempre que o usuário digita algo no campo. Aqui, ele é usado para capturar o texto digitado pelo usuário em tempo real e atualizar o estado 'livrosPesquisados' com os resultados da pesquisa conforme o usuário digita.

//'onBlur' é disparado quando o elemento perde o foco, quando clicamos fora do input por exemplo. Ele é usado aqui para atualizar o estado textoDigitado com o valor atual do input quando o usuário termina de digitar e sai do campo. Pode ser utilizado como uma função que nem no caso acima, onde sempre quando o usuario digitar algo e clicar fora do input, o valor digitado será salvo no estado textoDigitado e será exibido na tela dentro do <h1>.

//'event.target.value' é usado para pegar o valor atual de um elemento que disparou um evento.

export default Pesquisa;
