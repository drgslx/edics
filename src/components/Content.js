import React, { Component } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const FakeImg = styled.div`
  background-image: url("https://picsum.photos/300/300");
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  background-color: 333;
  @media screen and (max-width: 599px) {
    flex-direction: column;
  }
`;

const Side = styled.div`
  display: flex;
  flex: 30%;
  padding: 40px;
  justify-content: center;
  align-items: center;
  background-color: #333;
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    flex: 50%;
  }
`;

const SideWhite = styled.div`
  display: flex;
  flex: 30%;
  padding: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    flex: 50%;
  }
`;

const Main = styled.div`
  align-items: center;
  justify-content: center;
  flex: 70%;
  padding: 40px;
  background-color: #333;
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    flex: 50%;
  }
`;

// const MainVideo = styled.div`
//   display: flex;
//   flex: 70%;
//   padding: 40px;
//   justify-content: center;
//   align-items: center;
//   background-color: #333;
//   @media screen and (min-width: 600px) and (max-width: 1000px) {
//     flex: 50%;
//   }
// `;

const MainWhite = styled.div`
  flex: 70%;
  padding: 40px;
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    flex: 50%;
    background-color: white;
  }
`;

const BigTitle = styled.h1`
  font-size: 3rem;
  color: #1091fc;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1091fc;
  padding: 40px;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 10px 10px;
    width: 100%;
  }
`;

const Speciffications = styled.ul`
  list-style-type: none;
  width: 85vw;
  display: flex;
  flex-direction: column;
  color: black;
  text-align: left;
  padding: 0 30px;
  padding-bottom: 40px;
  align-items: left;
  width: 100%;
  margin: 0 auto;
  line-height: 1;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const Package = styled.ul`
  list-style-type: none;
  width: 70vw;
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
  padding: 0 30px;
  padding-bottom: 40px;
  align-items: left;
  width: 100%;
  margin: 0 auto;
  line-height: 1;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const Item = styled.li`
  width: 100%;
  font-size: 1.5rem;
  color: black;
  margin: 10px;
`;

const ItemWhite = styled.li`
  width: 100%;
  font-size: 1.5rem;
  color: white;
  margin: 10px;
  list-style-type: none;
`;

const Paragraph = styled.p`
  padding: 10px;
  font-size: 1.5rem;
  text-align: left;
  color: white;
`;

const Span = styled.p`
  font-size: 2rem;
  color: #1091fc;
  text-align: center;
`;
export default class Content extends Component {
  render() {
    return (
      <div>
        <Row>
          <Main>
            <ReactPlayer
              url="https://www.edics.ro/wp/wp-content/uploads/2018/06/Merged_edics_20180_edics-1.mp4?_=1"
              autostart="0"
              controls
              width="335"
              height="471"
            />
          </Main>
          <Side>
            <Paragraph>
              Față de T-urile convenționale nu mai trebuie să te dai jos de
              fiecare dată din mașină pentru a descuia lacătul, să cobori sau să
              ridici dispozitivul.{" "}
              <Span>Toate aceste lucruri costă timp, timpul tău prețios!</Span>
            </Paragraph>
          </Side>
        </Row>

        <Row>
          <MainWhite>
            <Title>Specificații și funcții</Title>
            <Speciffications>
              <Item>Distanță de acționare de până la 20 metri</Item>
              <Item>Temperaturi de funcționare de la -40 la +60 grade</Item>
              <Item>
                Dispozitivul este asigurat contra ploilor sau zăpezilor,
                functionand chiar și submersat în apă
              </Item>
              <Item>
                Funcționează cu o baterie de 6V ce îți oferă până la 6 luni de
                utilizări zilnice cu o singură încărcare
              </Item>
            </Speciffications>
          </MainWhite>
          <SideWhite>
            <FakeImg />
          </SideWhite>
        </Row>

        <Row>
          <Side>
            <FakeImg />
          </Side>
          <Main>
              <ItemWhite>
                Bateria se încarcă repede și ușor la orice priză prin
                intermediul incarcatorului inclus în pachet
              </ItemWhite>
              <ItemWhite>
                Avertizare sonoră anti-forțare cât și la ridicare-coborâre
                dispozitiv
              </ItemWhite>
              <ItemWhite>
                Acesta suportă șocuri/greutate de până la 2 tone
              </ItemWhite>
              <ItemWhite>
                Asigurare anti-furt prin intermediul încuietorii ce nu permite
                deschiderea dispozitivului
              </ItemWhite>
              <ItemWhite>
                Dispozitivul se fixează în asfalt în 3 puncte, acoperite de
                capacul încuiat
              </ItemWhite>
              <ItemWhite>Înălțime minimă: 6 cm Înălțime maximă 40 cm</ItemWhite>
          </Main>
        </Row>

        <Row>
          <MainWhite>
            <Title>Pachetul conține</Title>
            <Package>
              <Item>Dispozitiv parcare electrici</Item>
              <Item>2 telecomenzi</Item>
              <Item>2 chei pentru încuierea capacului exterior</Item>
              <Item>3 șuruburi fixare asfalt</Item>
              <Item>1 încărcător baterie</Item>
              <Item>Instrucțiuni folosire</Item>
            </Package>
          </MainWhite>
          <SideWhite>
            <FakeImg />
          </SideWhite>
        </Row>
      </div>
    );
  }
}
