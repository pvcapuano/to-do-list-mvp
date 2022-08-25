import React, { useEffect, useState } from "react";
import ListItems from "../ListItems";
import { Container, Wrapper, Input, Button } from "./styles";
import { v4 } from "uuid";
import { localStoragePosts } from "../../utils/savedPosts";

const ListInput = () => {
  // states
  const [posts, setPosts] = useState(localStoragePosts());
  const [post, setPost] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(
    () => localStorage.setItem("posts", JSON.stringify(posts)),
    [posts]
  );

  let inputText = (e) => {
    setPost(e.target.value);
  };

  const addPost = () => {
    let newPost = { id: v4(), postText: post };
    let includePost = posts.concat(newPost);

    if (post === "") {
      alert("Digite alguma tarefa!");
      return posts;
    }

    setPosts(includePost);
    setPost("");
  };

  const editInputPost = (e) => {
    setCurrentPost({ ...currentPost, postText: e.target.value });
  };

  const handleEditPost = (post) => {
    setIsEditing(true);

    setCurrentPost(post);
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedItem = posts.map((post) => {
      return post.id === updatedPost.id ? updatedPost : post;
    });

    setIsEditing(false);
    setPosts(updatedItem);
    setCurrentPost(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    handleUpdatePost(currentPost);
  };

  const delPost = (id) => {
    const removeItem = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(removeItem);
  };

  return (
    <Container>
      {isEditing ? (
        <>
          <h1>O que deseja editar?</h1>
          <Wrapper onSubmit={handleEditSubmit}>
            <Input
              placeholder="Editar tarefa"
              onChange={editInputPost}
              value={currentPost.postText}
              type="text"
            />
            <Button type="submit">Editar</Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Wrapper>
        </>
      ) : (
        <>
          <h1>O que deseja adicionar na lista?</h1>

          <Wrapper onSubmit={addPost}>
            <Input
              placeholder="Adicione uma nova tarefa"
              onChange={inputText}
              value={post}
              type="text"
            />
            <Button type="submit">Adicionar</Button>
          </Wrapper>
        </>
      )}

      <ListItems posts={posts} delPost={delPost} editPost={handleEditPost} />
    </Container>
  );
};

export default ListInput;
