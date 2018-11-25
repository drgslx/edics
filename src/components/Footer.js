import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  padding: 10px;
  color: white;
  background-color: #666;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          Pentru orice nelamuriri sau intrebari, nu ezita sa ne contactezi.
          Drumul BInelui 12, Bucuresti 0761.578.204 contact@edics.ro
        </FooterStyle>
      </div>
    );
  }
}
