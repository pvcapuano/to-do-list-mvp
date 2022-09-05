import React from "react";
import {
  Container,
  ListItem,
  ListItemText,
  Wrapper,
  EditButton,
  DelButton,
  ListButtons,
  ListText,
} from "./styles";

const ListItems = ({ posts, delPost, editPost }) => {
  return (
    <Container>
      <Wrapper>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListText>
              <ListItemText>{post.postText}</ListItemText>
            </ListText>
            <ListButtons>
              <EditButton onClick={() => editPost(post)} />
              <DelButton onClick={() => delPost(post.id)} />
            </ListButtons>
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ListItems;
