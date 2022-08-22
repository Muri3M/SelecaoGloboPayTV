import styled from "styled-components";

interface ImageProps {
  selected: boolean;
}

export const BrotherName = styled.h3`
  font-family: ${(props) => props.theme.fonts};
  font-size: 22px;
  margin: 2px;
`;

export const BrotherPhoto = styled.img<ImageProps>`
  max-width: 340px;

  cursor: pointer;
  border-radius: 5px;
  border: ${(props: ImageProps) =>
    props.selected ? "4px solid #fc9414" : " 1px solid #c6c6c6"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Text = styled.span`
  font-family: "${(props) => props.theme.fonts}";
  max-width: 340px;
`;
