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
  margin: 30px;
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
  border-radius: 25px;

  &:has(${Livros}:hover) ${Livros}:not(:hover) {
    filter: blur(4px);
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export const TituloLivro = styled.h1`
  font-size: 13px;
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  width: 209px;
  height: 35px;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const PrecoLivro = styled.h3`
  font-size: 13px;
  color: #04ff00;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  width: 209px;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ImgLivro = styled.img`
  width: 209px;
`;

const IconFavorite = styled.img`
  width: 30px;
  position: absolute;
  top: 10px;
  right: 20px;

  &:hover {
    content: url(${FavoriteButton});
    transform: scale(1.05);
  }
`;

const LivrosIMG = styled.div`
  position: relative;
  width: 220px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deleteFavorito(id) {
    await deletarLivro(id);
    await fetchFavoritos();
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <TituloContainer cor="#ffffff" tamanhoFonte="30px">
        SEUS LIVROS FAVORITOS
      </TituloContainer>
      <FavoritosContainer>
        {favoritos.map(
          (
            favorito //Puxa os favoritos
          ) => (
            <Livros>
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
          )
        )}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
