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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ListItem = styled.div`
  color: #f2f2f2;
`;

export const EditButton = styled(FaEdit)`
  color: #808080;
`;

export const DelButton = styled(FaTrash)`
  color: #808080;
`;
