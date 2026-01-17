import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLivros } from "../servicos/livros";

function Livro() {
  const { id } = useParams(); // pega o ID da URL
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    async function fetchLivro() {
      const livros = await getLivros();
      const livroSelecionado = livros.find((l) => l.id === Number(id));
      setLivro(livroSelecionado);
    }

    fetchLivro();
  }, [id]);

  if (!livro) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{livro.nome}</h1>
      <p>ID: {livro.id}</p>
      {/* aqui você pode colocar preço, descrição, imagem etc */}
    </div>
  );
}

export default Livro;
