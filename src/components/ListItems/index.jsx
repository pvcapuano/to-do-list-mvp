import React from "react";
import {
  Container,
  ListItem,
  ListItemText,
  Wrapper,
  EditButton,
  DelButton,
} from "./styles";

const ListItems = ({ posts, delPost, editPost }) => {
  return (
    <Container>
      <Wrapper>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText>{post.postText}</ListItemText>
            <EditButton onClick={() => editPost(post)} />
            <DelButton onClick={() => delPost(post.id)} />
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ListItems;
