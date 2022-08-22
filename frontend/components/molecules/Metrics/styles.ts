import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 6px solid #c6c6c6;
  border-radius: 10px;
`;

export const BrothersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  margin: 10px 0;
  background-color: #dcdcdc;
`;

export const Text = styled.h1`
  font-family: "Roboto";
  text-align: center;
  font-weight: 400;
  margin: 2px;
`;
