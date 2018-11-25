import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { keyFrameOne } from "./Animation";

const Sect = styled.section`
  div${Hro} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 125px 100px;
    @media (max-width: 450px) {
      padding: 0;
    }
  }
`;

const Hro = styled.div`
  && {
    position: relative;
    justify-content: center;
    min-height: 100vh;
    color: #ffffff;
    text-align: center;
  }
`;

const Bgimg = styled.div`
  background-image: url(https://www.barqar.com/wp-content/uploads/2016/09/Parking-Lot-iStock.jpg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  /* background: #1f4940; */
  background-repeat: no-repeat;
  z-index: -1;
  /* &.ceva {
    mix-blend-mode: multiply;
    filter: grayscale(200%);
  } */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #414a4f;
    opacity: 0.75;
  }
`;

const Text1 = styled.h1`
  font: bold 2.2rem "Open Sans", sans-serif;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  margin-top: 100px;
  @media (max-width: 450px) {
    font: bold 1.4rem "Open Sans", sans-serif;
  }
`;

const Text3 = styled.h3`
  font: normal 1.4rem "Open Sans", sans-serif;
  margin-bottom: 40px;
  margin-left: -20px;
  @media (max-width: 820px) {
    margin-left: 15px;
  }
  @media (max-width: 450px) {
    font: 1.2rem "Open Sans", sans-serif;
  }
`;

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
// teemo
// `;

const Text4 = styled.p`
  font: normal 2.4em "Open Sans", sans-serif;
  position: absolute;
  bottom: 74px;
  margin-left: 10px;
  @media (max-width: 450px) {
    font: 1.2rem "Open Sans", sans-serif;
    margin-bottom: 10px;
    margin-left: -4px;
  }
`;

const Triangle = styled.div`
  &::after {
    content: "";
    width: 0px;
    height: 0px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 50px solid #fff;
    position: absolute;
    bottom: 12px;
    left: 50%;
    margin-left: -40px;
    animation: ${keyFrameOne} 1s ease-in-out 0s infinite;
    z-index: 1;
    @media (max-width: 450px) {
      margin-bottom: 5px;
      margin-left: -45px;
    }
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <Sect>
        <Hro>
          <Bgimg />
          <Text1>Ai ajuns acasă și îți găsești locul de parcare ocupat?</Text1>
          <Text3>Edics îți oferă soluția!</Text3>
          {/* <Wrap> */}
          <Text4>Solutii inteligente la problemele tale</Text4>
          <Triangle />
          {/* </Wrap> */}
        </Hro>
      </Sect>
    );
  }
}
