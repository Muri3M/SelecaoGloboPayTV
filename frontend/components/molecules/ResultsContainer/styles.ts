import styled from "styled-components";

export const BrotherPhoto = styled.img`
  margin-top: 10px;
  width: 340px;
  height: 300px;
  @media (max-width: 600px) {
    width: 240px;
    height: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  overflow: hidden;
`;

export const Text = styled.h3`
  font-family: "${(props) => props.theme.fonts}";
  text-align: center;
  font-size: 22px;
  font-weight: 200;
  margin: 20px;
`;
