import styled from "styled-components";

export const BrotherName = styled.h3`
  display: flex;
  font-family: "${(props) => props.theme.fonts}";
  font-size: 22px;
  margin: 2px;
  justify-content: space-between;
`;

export const BrotherPhoto = styled.img`
  max-width: 340px;

  border-radius: 5px;
`;

export const Container = styled.div`
  max-width: 340px;

  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Text = styled.span`
  font-family: "${(props) => props.theme.fonts}";
  max-width: 340px;
`;

export const OrangeText = styled(Text)`
  color: ${(props) => props.theme.colors.main};
`;
