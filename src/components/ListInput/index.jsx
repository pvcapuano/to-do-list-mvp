import React, { useEffect, useState } from "react";
import ListItems from "../ListItems";
import { Container, Wrapper, Input, ButtonSC, ButtonWrapper } from "./styles";
import { v4 } from "uuid";
import { localStoragePosts } from "../../utils/savedPosts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#191919",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListInput = () => {
  // states
  const [posts, setPosts] = useState(localStoragePosts());
  const [post, setPost] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

          <Modal
            open={setOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography style={{ color: "#808080" }}>
                O que deseja editar?
              </Typography>
              <Wrapper onSubmit={handleEditSubmit}>
                <Input
                  placeholder="Editar tarefa"
                  onChange={editInputPost}
                  value={currentPost.postText}
                  type="text"
                />
                <ButtonSC type="submit">Editar</ButtonSC>
                <ButtonSC onClick={() => setIsEditing(false)}>
                  Cancelar
                </ButtonSC>
              </Wrapper>
            </Box>
          </Modal>

          {/* <Wrapper onSubmit={handleEditSubmit}>
            <Input
              placeholder="Editar tarefa"
              onChange={editInputPost}
              value={currentPost.postText}
              type="text"
            />
            <Button type="submit">Editar</Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Wrapper> */}
        </>
      ) : (
        <>
          <h1>Lista de Tarefas</h1>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography style={{ color: "#808080" }}>
                O que deseja adicionar na lista?
              </Typography>
              <Wrapper onSubmit={addPost}>
                <Input
                  placeholder="Adicione uma nova tarefa"
                  onChange={inputText}
                  value={post}
                  type="text"
                />
                <ButtonSC type="submit">Add</ButtonSC>
              </Wrapper>
            </Box>
          </Modal>
        </>
      )}

      <ListItems posts={posts} delPost={delPost} editPost={handleEditPost} />
      <ButtonWrapper>
        <ButtonSC onClick={handleOpen}>Adicionar</ButtonSC>
      </ButtonWrapper>
    </Container>
  );
};

export default ListInput;
