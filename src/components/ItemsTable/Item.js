import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  line-height: 2em;
  width: 100%;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 1%;

  @media (max-width: 720px) and (orientation : landscape) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  @media (max-width: 768px) {
  }

  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 1%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1fr;
  margin: 0 auto;
  margin-top: 10px;
`;

const DetailsContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #3696ff;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    flex-wrap: wrap;

  }
`;

const Price = styled.p`
position: relative;
@media (max-width: 700px) and (orientation : landscape) {
  
}
  font-size: 1.7rem;
  background: red;
  color: white;
  text-align: center;
  padding: 20px;
  font-weight: 600;
  & + & {
    font-size: 200px;
    
  }
  @media (max-width: 1024px) {
    padding: 10px;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 300;

    text-align: right;
    @media (max-width: 900px) {
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

const OBradFrumos = styled.div`
  margin-right: 10px;
  @media (max-width: 1100px) {
    margin-top: 15px;
  }
`;

const item = props => {
  return (
    <OBradFrumos>
      <Container>
        <ImgContainer>
          <img src={props.url} />
        </ImgContainer>
        <DetailsContainer>
        <Title>{props.name}</Title>
        <Price>{props.price} LEI</Price>
        </DetailsContainer>
      </Container>
    </OBradFrumos>
  );
};

export default item;
