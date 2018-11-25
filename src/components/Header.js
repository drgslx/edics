import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.png";

// const HEADER_HEIGHT = 10000012300000000;

const Hdr = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 35px 100px 0;
  font-size: 1.1em;
  @media (max-width: 1000px) {
    padding: 20px 50px;
  }
  @media (max-width: 884px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 150px;
  max-width: 150px;
  object-fit: contain;
`;

const Items = styled.nav`
  display: flex;
  @media (max-width: 884px) {
    margin-top: 15px;
    word-wrap: break-word;
  }
`;

const Item = styled.li`
  margin: 0 1rem;
  list-style: none;
`;

export default class Header extends Component {
  render() {
    return (
      <Hdr>
        <Logo src={logo} alt="logo" />
        <Items>
          <Item>0761.578.204</Item>
          <Item>contact@edics.ro</Item>
          {/* <Item>Drumul Binelui 12, Bucuresti</Item> */}
        </Items>
      </Hdr>
    );
  }
}

// const Logo = styled.img`
//   display: block;
//   width: 100%;
//   box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.06);
//   object-fit: cover;
// `;

// const Container = styled.div`
//   margin: 10px;
//   display: grid;
//   grid-template-columns: ${HEADER_HEIGHT}px repeat(auto-fit, minmax(10px, 1fr));
//   height: ${HEADER_HEIGHT};
//   justify-content: center;
//   text-align: center;
//   overflow: hidden;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
