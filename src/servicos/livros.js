import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" }); //Conexão com a API, cria uma API.
//{baseURL: "http://localhost:8000/livros"} É a URL que o Axios vai buscar os dados.

//Métodos, funções para seguir com os métodos HTTP.
//GET
function getLivros() {
  const response= livrosAPI.get('/');

  return response.data; //Retornará todos os livros requisitados.
} 

export {
  getLivros
}


//Coletar os dados dos livros e como na baseURL já tem um link para o GET não é necessário inserir aqui também, apenas insira a '/'. 
// Lembrando que: Response: é o que server manda e Request é o que o usuário envia para o servidor.
