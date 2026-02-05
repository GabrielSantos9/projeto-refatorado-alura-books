import styled from "styled-components";

export const TituloContainer = styled.h1`
  font-size: ${props => props.tamanhoFonte || "1,5rem"};
  color: ${props => props.cor || "#FD8325"};
`;

// --- OBSERVAÇÕES ---
//A propriedade 'props' é usada para acessar os valores passados para o componente estilizado, permitindo a personalização do estilo com base nas propriedades fornecidas. Também é muito usado em casos onde um elemento é usado em diversas sessões do projeto, mas com estilos diferentes.