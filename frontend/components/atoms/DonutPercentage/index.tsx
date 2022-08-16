import React, { ReactNode } from "react";
import Brother from "../../../models/Brother";

import {
  Container,
  Donut,
  DonutWrapper,
  Hole,
  Label,
  Label1Wrapper,
  Label2Wrapper,
} from "./styles";

interface BrotherProps {
  voted: string;
  brothers: Brother[];
  children: ReactNode;
}

const DonutPercentage: React.FC<BrotherProps> = ({
  voted,
  brothers,
  children,
}) => {
  const percentVoted =
    (brothers[0].votes * 100) / (brothers[0].votes + brothers[1].votes);
  return (
    <Container>
      <DonutWrapper>
        <Donut first={voted === brothers[0].name} percent={percentVoted * 2.4}>
          <Label1Wrapper percent={percentVoted * 2.4}>
            <Label>{percentVoted.toFixed(0)}%</Label>
          </Label1Wrapper>
          <Label2Wrapper percent={percentVoted * 2.4}>
            <Label>{(100 - percentVoted).toFixed(0)}%</Label>
          </Label2Wrapper>
          <Hole>{children}</Hole>
        </Donut>
      </DonutWrapper>
    </Container>
  );
};

export default DonutPercentage;
