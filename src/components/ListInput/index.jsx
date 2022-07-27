import React from "react";
import { Container, Input, Button } from "./styles";

const ListInput = () => {
  return (
    <Container>
      <h1>O que deseja adicionar na lista?</h1>
      <Input placeholder="Adicione um item"/>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default ListInput;
