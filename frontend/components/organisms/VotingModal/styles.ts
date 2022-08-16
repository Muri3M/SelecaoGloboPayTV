import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 6px solid #c6c6c6;
  border-radius: 10px;
`;

export const BrothersWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 20px 0;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-family: "Segoe UI";
  font-weight: 100;
  text-align: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  border-bottom: 10px solid #ececec;
  margin: 10px;
`;

export const Warning = styled.span`
  font-family: "Segoe UI";
  text-align: center;
  color: #cc3300;
  margin-top: 10px;
`;

export const WallIcon = styled.img`
  margin: 20px;
  width: 40px;
  height: 40px;
`;
