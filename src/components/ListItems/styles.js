import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Container = styled.div`
  background: #191919;

  > h1 {
    color: #808080;
  }
`;

export const Wrapper = styled.div``;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ListText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`;

export const ListButtons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ListItemText = styled.p`
  color: #f2f2f2;
`;

export const EditButton = styled(FaEdit)`
  color: #808080;
  cursor: pointer;
`;

export const DelButton = styled(FaTrash)`
  cursor: pointer;
  color: #808080;
`;
