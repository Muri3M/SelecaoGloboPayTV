import React from "react";
import Brother from "../../../models/Brother";
import Clock from "../../atoms/Clock";
import DonutPercentageContainer from "../../atoms/DonutPercentage";

import { BrotherPhoto, Container, InfoContainer, Text } from "./styles";

interface BrotherProps {
  voted: string;
  brothers: Brother[];
}

const ResultsContainer: React.FC<BrotherProps> = ({ voted, brothers }) => {
  return (
    <Container>
      <Text>
        <strong>Parabéns!</strong> Seu voto para <strong>{voted}</strong> foi
        enviado com sucesso.
      </Text>
      <InfoContainer>
        <BrotherPhoto src={`/images/${brothers[0].name}.png`} />
        <DonutPercentageContainer voted={voted} brothers={brothers}>
          <Clock />
        </DonutPercentageContainer>
        <BrotherPhoto src={`/images/${brothers[1].name}.png`} />
      </InfoContainer>
    </Container>
  );
};

export default ResultsContainer;
