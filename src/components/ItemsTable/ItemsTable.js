import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px;
  margin: 0 auto;
  width: 100%;
;
@media (min-width: 1366px)
{
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
`
const Title = styled.h1`
  font-size: 4rem;
  color: #1091fc;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;
const Title2 = styled.h2`
  font-size: 2rem;
  background-color: #1091fc;
  color: #fff238;
  padding: 10px;
`;

export default class ItemsTable extends Component {
  state = {
    items: [
      {
        id: "143fe",
        url: "https://picsum.photos/200/?image=0",
        name: "Capac Otel",
        price: 85
      },

      {
        id: "32432f",
        url: "https://picsum.photos/200/?image=25",
        name: "Motor",
        price: 180
      },

      {
        id: "322223f",
        url: "https://picsum.photos/200/?image=33",
        name: "Brat Metalic",
        price: 80
      },

      {
        id: "25b67by62f",
        url: "https://picsum.photos/200/?image=14",
        name: "Telecomanda",
        price: 50
      },

      {
        id: "blabla",
        url: "https://picsum.photos/200/?image=76",
        name: "Acumulator",
        price: 70
      }
    ]
  };

  render() {
    return (
      <div>
        <Title>Piese de schimb</Title>
        <Title2>Pentru comenzi folosiți numărul din datele de contact!</Title2>
        <Container>
          {this.state.items.map(item => {
            return (
              <Item
                url={item.url}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}
