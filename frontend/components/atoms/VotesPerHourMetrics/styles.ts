import styled from "styled-components";

export const Container = styled.div`
  max-width: 340px;

  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Segoe UI";
  font-weight: 400;
  font-size: 22px;

  width: 90px;
  height: 40px;
  border: 1px solid #c6c6c6;
`;

export const VotesCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Segoe UI";
  font-weight: 400;
  font-size: 22px;

  width: 190px;
  height: 40px;
  border: 1px solid #c6c6c6;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;