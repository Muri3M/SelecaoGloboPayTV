import styled from "styled-components";

export const Container = styled.button`
  width: 200px;
  height: 50px;
  max-width: 400px;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 320px;
  }

  border-radius: 5px;
  border: none;

  cursor: pointer;
  background-image: linear-gradient(#0c94fc, #0468bc);

  box-shadow: 0 0 20px;

  transition: background-color 0.2s;

  color: #fcfcfc;
  text-shadow: 10px;

  font-weight: bold;
  font-size: 14px;

  &:hover {
    background-image: linear-gradient(#0c94fc, #0468a7);
  }
`;
