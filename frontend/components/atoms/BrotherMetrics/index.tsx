import React from "react";
import Brother from "../../../models/Brother";

import { BrotherName, BrotherPhoto, Container, Text } from "./styles";

interface BrotherMetricsProps {
  brother: Brother;
}

const BrotherMetrics: React.FC<BrotherMetricsProps> = ({ brother }) => {
  return (
    <Container>
      <BrotherName>
        {brother.name}
        <span style={{ color: "#fc9414" }}>Votos: {brother.votes}</span>
      </BrotherName>
      <BrotherPhoto src={`/images/${brother.name}.png`} />
    </Container>
  );
};

export default BrotherMetrics;
