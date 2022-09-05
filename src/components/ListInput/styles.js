import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  padding: 30px;
  background: #191919;
  text-align: center;
  margin: 30px auto;

  > h1 {
    color: #808080;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonSC = styled.button`
  background: #1e6f9f;
  border: none;
  color: #fff;
  font-weight: 400;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
`;
