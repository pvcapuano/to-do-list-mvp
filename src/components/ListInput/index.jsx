import React from "react";
import { Container, Wrapper, Input, Button } from "./styles";

const ListInput = () => {
  return (
    <Container>
      <h1>O que deseja adicionar na lista?</h1>
      <Wrapper>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button>Criar</Button>
      </Wrapper>
    </Container>
  );
};

export default ListInput;
