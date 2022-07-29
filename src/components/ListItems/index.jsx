import React from "react";
import { Container, ListItem, Wrapper, EditButton, DelButton } from "./styles";

const ListItems = () => {
  return (
    <Container>
      <Wrapper>
        <ListItem>Testando</ListItem>
        <EditButton />
        <DelButton />
      </Wrapper>
    </Container>
  );
};

export default ListItems;
