import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

export const Text = styled.span`
  color: #b1b1b1;

  text-align: center;
  font-family: "${(props) => props.theme.fonts}";
`;

export const Time = styled.span`
  color: #fc9414;
  font-size: 36px;
  text-align: center;
  font-family: "${(props) => props.theme.fonts}";
`;
