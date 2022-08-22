import styled from "styled-components";

interface DonutProps {
  first: boolean;
  percent: number;
}

interface LabelProps {
  percent: number;
}

export const Container = styled.div`
  position: relative;
`;

export const Donut = styled.div<DonutProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;
  border-radius: 50%;

  transform: rotate(240deg);
  border: 3px solid white;
  background: conic-gradient(
    ${(props) => (props.first ? props.theme.colors.main : "#c4c4c4")} 0deg
      ${(props) => props.percent}deg,
    white ${(props) => props.percent}deg ${(props) => props.percent + 1}deg,
    ${(props) => (props.first ? "#c4c4c4" : props.theme.colors.main)}
      ${(props) => props.percent + 1}deg 240deg,
    white 240deg 360deg
  );
`;

export const DonutWrapper = styled.div`
  position: relative;
  top: 100px;
  margin: 0 -60px;
  @media (max-width: 600px) {
    margin: 0 -140px;
  }
`;

export const Hole = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  transform: rotate(-240deg);
  background: #ffffff;
`;

export const Label = styled.div`
  position: absolute;
  z-index: 50;
  top: -143px;
  font-size: 26px;
  color: white;
  text-shadow: 1px 1px #090909;
`;

export const Label1Wrapper = styled.div`
  position: absolute;
  transform: rotate(${(props: LabelProps) => props.percent - 23}deg);
`;

export const Label2Wrapper = styled.div`
  position: absolute;
  transform: rotate(${(props: LabelProps) => props.percent + 2}deg);
`;
