import React from "react";
import {
  Container,
  ListItem,
  ListItemText,
  Wrapper,
  EditButton,
  DelButton,
} from "./styles";

const ListItems = ({ posts, delPost }) => {
  return (
    <Container>
      <Wrapper>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText>{post.postText}</ListItemText>
            <EditButton />
            <DelButton onClick={() => delPost(post.id)} />
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ListItems;
