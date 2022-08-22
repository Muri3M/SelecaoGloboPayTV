import React from "react";
import Brother from "../../../models/Brother";

import {
  BrotherName,
  BrotherPhoto,
  Container,
  OrangeText,
  Text,
} from "./styles";

interface BrotherMetricsProps {
  brother: Brother;
}

const BrotherMetrics: React.FC<BrotherMetricsProps> = ({ brother }) => {
  return (
    <Container>
      <BrotherName>
        {brother.name}
        <OrangeText>Votos: {brother.votes}</OrangeText>
      </BrotherName>
      <BrotherPhoto src={`/images/${brother.name}.png`} />
    </Container>
  );
};

export default BrotherMetrics;
