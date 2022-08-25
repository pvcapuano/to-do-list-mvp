import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 40px;
  background: #191919;

  > h1 {
    color: #808080;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
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
