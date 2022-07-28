import styled from "styled-components";

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

export const Input = styled.input`
  width: 70%;
  height: 30px;
  margin-top: 20px;
  background: #262626;
  color: #808080;

  &::placeholder {
    padding: 10px;
  }
`;
export const Button = styled.button`
  background: #1e6f9f;
  border: none;
  color: #fff;
  font-weight: 400;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
`;
