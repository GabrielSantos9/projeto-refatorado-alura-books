import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLivros } from "../servicos/livros";
import styled from "styled-components";
import imgBook from "../imgs/livro.png";
import imgPorcentagem from "../imgs/porcentagem.png";
import heartIcon from "../imgs/heart.svg";
import {
  postFavorito,
  getFavoritos,
  deletarLivro,
} from "../servicos/favoritos";

const AnunciosContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  flex-direction: row;
  position: relative;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anuncio = styled.div`
  display: flex;
  margin-top: 90px;
`;

const ImgLivro = styled.img`
  width: 282px;
  height: 406px;
  cursor: pointer;
`;

const ImgPorcentagem = styled.img`
  width: 54px;
  height: 22px;
`;

const TituloLivro = styled.h1`
  font-size: 29px;
  color: #fff;
  text-align: center;
  height: 34px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Subtitulo = styled.h2`
  font-size: 13px;
  color: #c2c2c2;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const PrecoAnterior = styled.span`
  color: #c5c5c5;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 600;
`;

const NovoPreco = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const BotaoCompra = styled.button`
  width: 160px;
  height: 48px;
  background-color: #fd8325;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  border: 0px;
  cursor: pointer;
  margin-top: 25px;
`;

const InformacoesLivro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  align-items: flex-start;
  margin-top: 55px;
`;

const InformacoesPreco = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
`;

const Descricao = styled.div`
  width: 900px;
  height: 100vh;
`;

const TituloDescricao = styled.h1`
  margin: 0px;
  color: #ffffff;
  font-size: 29px;
  font-weight: 700;
  margin-top: 70px;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 3px;
    margin-top: 32px;
    background-color: #fd8325;
  }
`;

const TextoDescricao = styled.p`
  margin: 0;
  color: #fff;
  font-size: 24px;
  height: 168px;
  display: flex;
  margin-top: 30px;
  text-align: start;
`;

const Favoritar = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #fff;
`;

const HeartIMG = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const FavoriteButton = styled.button`
  padding: 8px 12px;
  background-color: #171717;
  border: 0px;
  border-radius: 8px;
  display: flex;
  text-align: center;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffffff97;
    cursor: pointer;
  }
`;

function Livro() {
  const { id } = useParams(); // pega o ID da URL
  const [livro, setLivro] = useState(null); //Armazena os dados do livro atual
  const [loadingFavorito, setLoadingFavorito] = useState(false); // Estado de controle para evitar múltiplos cliques rápidos
  const [favoritos, setFavoritos] = useState([]); //Guarda a lista de livros favoritos

  useEffect(() => {
    //Busca o livro pelo id da url
    async function fetchLivro() /*Busca dados da API*/ {
      const livros = await getLivros(); //Busca todos os livros da API
      const livroEncontrado = livros.find((livro) => String(livro.id) === id); //Procura o livro onde o id é igual ao id da URL
      setLivro(livroEncontrado); // Salva o livro encontrado no estado
    }

    fetchLivro(); //Execução da função
  }, [id]); //Executa sempre que o id da URL mudar

  //Busca os livros favoritos na API e salva no estado do React, assim que o componente é carregado
  useEffect(() => {
    //Busca dados da API
    async function fetchFavoritos() {
      const favoritosDaAPI = await getFavoritos(); //faz uma requisição (GET) na API
      setFavoritos(favoritosDaAPI); //Salva os dados recebidos da API no estado
    }

    fetchFavoritos(); //Execução da função
  }, []); //Executa apenas uma vez quando o componente é montado

  /* Atualizar favoritos */
  async function atualizarFavoritos() {
    const favoritosAtualizados = await getFavoritos(); //Busca os favoritos atualizados na API
    setFavoritos(favoritosAtualizados); //Atualiza o estado com os favoritos mais recentes
  }

  /* Favoritar e desfavoritar */
  async function insertFavorito(id) {
    if (loadingFavorito) return; //Evita múltiplos cliques rápidos

    setLoadingFavorito(true); //Inicia o estado de carregamento

    try {
      const livroJaFavorito = favoritos.some((livro) => livro.id === id); //Verifica se o livro já está na lista de favoritos e some retorna true se encontrar algum livro com o mesmo id

      if (livroJaFavorito) { //Se o livro já for favorito, remove ele
        await deletarLivro(id); //Chama a função para deletar o livro da API
        console.log("Livro removido dos favoritos!");
      } else { //Se o livro não for favorito, adiciona ele
        await postFavorito(id); //Chama a função para adicionar o livro na API
        console.log("Livro adicionado aos favoritos!");
      }

      await atualizarFavoritos(); //Atualiza a lista de favoritos após a ação de favoritar/desfavoritar
    } catch (error) {
      console.error("Erro ao atualizar favoritos", error);
    } finally {
      setLoadingFavorito(false);
    }
  }

  if (!livro) {
    return <p>Livro não encontrado</p>;
  }

  const livroJaFavorito = favoritos.some((fav) => fav.id === livro.id); //verifica se o livro exibido na tela já existe na lista de favoritos, para controlar corretamente a ação e o estado do botão.

  return (
    <AnunciosContainer>
      <Anuncio>
        <ImgLivro src={imgBook} alt="Capa do livro" />
        <InformacoesLivro>
          <Subtitulo>EDITORA ALURA</Subtitulo>
          <TituloLivro>{livro.nome}</TituloLivro>
          <InformacoesPreco>
            <ImgPorcentagem src={imgPorcentagem} alt="Ícone de porcentagem" />
            <PrecoAnterior>{livro.precoAnterior}</PrecoAnterior>
            <NovoPreco>{livro.preco}</NovoPreco>
          </InformacoesPreco>
          <BotaoCompra>Obter</BotaoCompra>
          <FavoriteButton
            onClick={() => insertFavorito(livro.id)}
            disabled={loadingFavorito}
            style={{
              opacity: loadingFavorito ? 0.5 : 1,
              cursor: loadingFavorito ? "not-allowed" : "pointer",
            }}
          >
            <HeartIMG src={heartIcon} />
            <Favoritar>
              {loadingFavorito
                ? "Processando..."
                : livroJaFavorito
                  ? "Favoritado"
                  : "Favoritar"}
            </Favoritar>
          </FavoriteButton>
        </InformacoesLivro>
      </Anuncio>
      <Descricao>
        <TituloDescricao>SINOPSE</TituloDescricao>
        <TextoDescricao>{livro.descricao}</TextoDescricao>
      </Descricao>
    </AnunciosContainer>
  );
}

export default Livro;
