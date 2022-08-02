import React, { useEffect, useState } from "react";
import ListItems from "../ListItems";
import { Container, Wrapper, Input, Button } from "./styles";
import { v4 } from "uuid";
import { localStoragePosts } from "../../utils/savedPosts";

const ListInput = () => {
  const [posts, setPosts] = useState(localStoragePosts());

  const [currentPost, setCurrentPost] = useState("");

  useEffect(
    () => localStorage.setItem("posts", JSON.stringify(posts)),
    [posts]
  );

  let inputText = (e) => {
    setCurrentPost(e.target.value);
  };

  const addPost = () => {
    let newPost = { id: v4(), postText: currentPost };
    let includePost = posts.concat(newPost);

    if (currentPost === "") return posts;

    setPosts(includePost);
    setCurrentPost("");
  };

  return (
    <Container>
      <h1>O que deseja adicionar na lista?</h1>
      <Wrapper>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChange={inputText}
          value={currentPost}
          type="text"
        />
        <Button onClick={addPost}>Criar</Button>
      </Wrapper>

      <ListItems posts={posts} />
    </Container>
  );
};

export default ListInput;
