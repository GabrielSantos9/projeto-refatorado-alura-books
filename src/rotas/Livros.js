import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLivros } from "../servicos/livros";
import styled from "styled-components";
import imgBook from "../imgs/livro.png";
import imgPorcentagem from "../imgs/porcentagem.png";
import heartIcon from "../imgs/heart.svg";
import { postFavorito } from "../servicos/favoritos";
import { getFavoritos } from "../servicos/favoritos";

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
  width: 700px;
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
  width: 110px;
  height: 36px;
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
  const [livro, setLivro] = useState(null);

  
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    async function fetchFavoritos() {
      const favoritosDaAPI = await getFavoritos();
      setFavoritos(favoritosDaAPI);
    }

    fetchFavoritos();
  }, []);

  async function insertFavorito(id) {
    if (favoritos.some((livro) => livro.id === id)) {
      alert("Livro já está nos favoritos");
      return;
    }

    await postFavorito(id);
    setFavoritos([...favoritos, { id }]);
  }

  useEffect(() => {
    async function fetchLivro() {
      const livros = await getLivros();
      const livroEncontrado = livros.find((livro) => String(livro.id) === id);
      setLivro(livroEncontrado);
    }

    fetchLivro();
  }, [id]);

  if (!livro) {
    return <p>Livro não encontrado</p>;
  }

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
          <FavoriteButton>
            <HeartIMG src={heartIcon} alt="favorite-icon" />
            <Favoritar
              onClick={() => {
                insertFavorito(livro.id);
              }}
            >
              Favoritar
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
