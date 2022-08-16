import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BrothersWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-family: "Segoe UI";
  font-weight: 100;
  text-align: center;
`;

export const Warning = styled.span`
  font-family: "Segoe UI";
  text-align: center;
  color: #cc3300;
  margin-top: 10px;
`;
