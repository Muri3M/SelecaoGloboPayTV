import React from "react";
import Countdown from "react-countdown";

import { Container, Text, Time } from "./styles";

const Clock: React.FC = () => {
  const time = new Date();
  time.setHours(24, 0, 0, 0);
  return (
    <Container>
      <Text>FALTAM</Text>
      <Time>
        <Countdown date={time} daysInHours />
      </Time>
      <Text>PARA ENCERRAR A VOTAÇÃO</Text>
    </Container>
  );
};

export default Clock;
