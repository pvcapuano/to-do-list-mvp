import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 100%;
  padding: 30px;
  background: #ffffff;
  text-align: center;
  margin: 30px auto;
  border-radius: 20px;

  > h1 {
    font-size: 40px;
    color: #808080;
    margin-bottom: 20px;
  }

  @media (max-width: 426px) {
    width: 350px;
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
  background: #808080;
  color: #fff;

  &::placeholder {
    padding: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonWrapper2 = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  background: #9462d3;
  border: none;
  color: #fff;
  font-weight: 400;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  margin-top: 20px;
`;

export const ButtonSC = styled.button`
  background: #9462d3;
  border: none;
  color: #fff;
  font-weight: 400;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
`;
