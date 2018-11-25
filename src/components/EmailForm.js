import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  margin: 30px auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  width: 75vw;
`;

const Input = styled.input`
  margin: 10px;
  width: 300px;
  padding: 5px;
  border-radius: 3px;
  font-size: 1.7rem;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
  @media (min-width: 300px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  margin: 10px;
  width: 300px;
  height: 100px;
  padding: 5px;
  border-radius: 3px;
  font-size: 1.7rem;
  border: 1px solid #ccc;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
  background-color: #fff;

  @media (min-width: 300px) {
    width: 100%;
    height: 100px;
  }
`;

const Button = styled.button`
  display: inline-block;
  height: 55px;
  width: 250px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  border: none;
  font-size: 25px;
  font-weight: 600;
  padding: 5px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-image: linear-gradient(to bottom, #00d6f9 0%, #1091fc 100%);
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:hover {
    background: #1091fc;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:active {
    background: #0d7cd8;
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

// Text

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #3696ff;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
  }
`;

// const TextInput = styled.input.attrs({
//   type: 'text'
// })``;

class EmailForm extends Component {
  render() {
    return (
      <Container>
        <Title>Sesizari (Timp maxim de raspuns: 48h) </Title>
        <Form>
          <Input type="text" name="nume" placeholder="Nume" required />
          <Input type="text" name="prenume" placeholder="Prenume" required />
          <Input
            type="number"
            name="nrtel"
            placeholder="Numar Telefon"
            required
          />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="text" name="adresa" placeholder="Adresa" required />
          <TextArea
            type="textArea"
            name="sesizare"
            placeholder="Va rugam detaliati sesizarea dumneavoastra"
          />
          <Button type="submit">Trimite</Button>
        </Form>
      </Container>
    );
  }
}

export default EmailForm;
