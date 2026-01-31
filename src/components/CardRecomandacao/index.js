import styled from "styled-components";

const Card = styled.div`
  background-color: #000;
  text-align: center;
  width: 768px;
  border-radius: 30px;
  margin-bottom: 20px;
`;
const TituloCard = styled.h1`
  color: white;
  font-size: 30px;
  padding-left: 10px;
`;

const InformacoesCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const InfomacoesCurso = styled.div`
  text-align: start;
  color: white;
`;

const TextoCurso = styled.h2`
  font-size: 25px;
  width: 70%;
`;

const TituloCurso = styled.span`
  color: #000;
  background-color: #f6ac24;
  font-size: 23px;
  width: 10px;
`;

const Descricao = styled.p`
  width: 80%;
`;

const ImagemRecomendacao = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLivro = styled.img`
  padding-bottom: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  height: 40px;
  background-color: #f6ac24;
  color: #000;
  border: 0;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 5px;
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
