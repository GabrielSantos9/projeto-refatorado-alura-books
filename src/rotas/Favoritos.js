import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos, deletarLivro } from "../servicos/favoritos";
import { TituloContainer } from "../components/Titulo";
import imgBook from "../imgs/livro.png";
import FavoriteIcon from "../imgs/favorite-icon.png";
import FavoriteButton from "../imgs/Favorite-button.png";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  display: flex;
  background-color: #171717;
`;

const Livros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const FavoritosContainer = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1c1c;
  border-radius: 1.5625rem;

  &:has(${Livros}:hover) ${Livros}:not(:hover) {
    filter: blur(0.25rem);
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export const TituloLivro = styled.h1`
  font-size: 0.8125rem;
  color: #fff;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
  text-align: center;
  width: 13.0625rem;
  height: 2.1875rem;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const PrecoLivro = styled.h3`
  font-size: 0.8125rem;
  color: #04ff00;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
  text-align: center;
  width: 13.0625rem;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
`;

const ImgLivro = styled.img`
  width: 13.0625rem;
`;

const IconFavorite = styled.img`
  width: 1.875rem;
  position: absolute;
  top: 0.625rem;
  right: 1.25rem;

  &:hover {
    content: url(${FavoriteButton});
    transform: scale(1.05);
  }
`;

const LivrosIMG = styled.div`
  position: relative;
  width: 13.75rem;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]); //estado para armazenar os livros favoritos
  const navigate = useNavigate(); //troca de página via código, sem recarregar o site, guarda uma função (navigate) que muda a rota do site

  async function fetchFavoritos() {
    //função para buscar os livros favoritos da API
    const favoritosDaAPI = await getFavoritos(); //chama a função que busca os favoritos na API
    setFavoritos(favoritosDaAPI); //atualiza o estado com os livros favoritos buscados
  }

  async function deleteFavorito(id) {
    //função para deletar um livro dos favoritos
    await deletarLivro(id); //chama a função que deleta o livro na API
    await fetchFavoritos(); //atualiza a lista de favoritos após a deleção
  }

  useEffect(() => {
    //hook que executa a função fetchFavoritos quando o componente é montado
    fetchFavoritos(); //busca os livros favoritos da API
  }, []); //array vazio significa que o efeito roda apenas uma vez, quando o componente é montado

  function abrirLivro(id) {
    //função para abrir a página do livro ao clicar nele
    navigate(`/livro/${id}`); //navega para a página do livro com o id especificado
  }

  return (
    <AppContainer>
      <TituloContainer cor="#ffffff" tamanhoFonte="30px">
        SEUS LIVROS FAVORITOS
      </TituloContainer>
      <FavoritosContainer>
        {favoritos.map(
          //mapeia os livros favoritos para exibição
          (
            favorito, //Puxa os favoritos
            //retorna o componente Livros para cada livro favorito
          ) => (
            <Livros onClick={() => abrirLivro(favorito.id)}>
              <LivrosIMG>
                <ImgLivro src={imgBook} alt="image-book" />
                <IconFavorite
                  onClick={() => deleteFavorito(favorito.id)}
                  src={FavoriteIcon}
                  alt="Favorite Icon"
                />
              </LivrosIMG>
              <TituloLivro>{favorito.nome}</TituloLivro>
              <PrecoLivro>{favorito.preco}</PrecoLivro>
            </Livros>
          ),
        )}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
