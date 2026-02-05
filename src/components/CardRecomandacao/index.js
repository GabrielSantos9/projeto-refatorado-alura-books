import styled from "styled-components";

const Card = styled.div`
  background-color: #000;
  text-align: center;
  width: 48rem;
  border-radius: 1.875rem;
  margin-bottom: 1.25rem;
`;
const TituloCard = styled.h1`
  color: white;
  font-size: 1.875rem;
  padding-left: 0.625rem;
`;

const InformacoesCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const InfomacoesCurso = styled.div`
  text-align: start;
  color: white;
`;

const TextoCurso = styled.h2`
  font-size: 1.5625rem;
  width: 70%;
`;

const TituloCurso = styled.span`
  color: #000;
  background-color: #f6ac24;
  font-size: 1.4375rem;
  width: 0.625rem;
`;

const Descricao = styled.p`
  width: 80%;
`;

const ImagemRecomendacao = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLivro = styled.img`
  padding-bottom: 0.625rem;
  border-radius: 0.3125rem;
`;

const Button = styled.button`
  height: 2.5rem;
  background-color: #f6ac24;
  color: #000;
  border: 0;
  font-size: 0.9375rem;
  text-transform: uppercase;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

function CardRecomendacao({descricao, img }) { //props card (descrição e imagem)
  return (
    <Card>
      <TituloCard>RECOMENDAÇÃO</TituloCard>
      <InformacoesCard>
        <InfomacoesCurso>
          <TextoCurso>Talvez você se interesse pelo <TituloCurso>Angular 11</TituloCurso></TextoCurso>
    
          <Descricao>{descricao}</Descricao>
        </InfomacoesCurso>
        <ImagemRecomendacao>
          <ImgLivro src={img} alt="angular-img" />
          <Button>Saiba mais</Button>
        </ImagemRecomendacao>
      </InformacoesCard>
    </Card>
  );
}

export default CardRecomendacao;
