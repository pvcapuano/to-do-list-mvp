import React, { useEffect, useState } from "react";
import ListItems from "../ListItems";
import { Container, Wrapper, Input, Button } from "./styles";

const ListInput = () => {
  const [posts, setPosts] = useState([
    () => {
      const savedPosts = localStorage.getItem("posts");

      if (posts) {
        return JSON.parse(savedPosts);
      } else {
        return [];
      }
    },
  ]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  
  return (
    <Container>
      <h1>O que deseja adicionar na lista?</h1>
      <Wrapper>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button>Criar</Button>
      </Wrapper>

      <ListItems />
    </Container>
  );
};

export default ListInput;
