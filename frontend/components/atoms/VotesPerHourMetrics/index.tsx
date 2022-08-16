import React, { useEffect, useState } from "react";
import Brother from "../../../models/Brother";
import VotesPerHour from "../../../models/VotesPerHour";

import { Container, Cell, Row, Table, VotesCell } from "./styles";

interface VotesPerHourProps {
  brothers: Brother[];
}

const VotesPerHourMetrics: React.FC<VotesPerHourProps> = ({ brothers }) => {
  const [totalVotesPerHour, setTotalVotesPerHour] = useState<VotesPerHour[]>(
    []
  );

  useEffect(() => {
    let tempArray: VotesPerHour[] = [];

    brothers.forEach((brother) => {
      brother.votesPerHour.forEach((hour) => {
        let votesIndex = -1;
        votesIndex = tempArray.findIndex(
          (votesPerHour) =>
            votesPerHour.day === hour.day && votesPerHour.hour === hour.hour
        );
        if (votesIndex !== -1) {
          tempArray[votesIndex].votes += hour.votes;
        } else {
          tempArray.push(hour);
        }
      });

      setTotalVotesPerHour(tempArray);
    });
  }, [brothers]);

  return (
    <Container>
      <Table>
        <Row>
          <Cell>Dia</Cell>
          <Cell>Hora</Cell>
          <VotesCell>Votos</VotesCell>
        </Row>
        {totalVotesPerHour.map((votesPerHour, index) => (
          <Row key={index}>
            <Cell>{votesPerHour.day}</Cell>
            <Cell>{votesPerHour.hour}h</Cell>
            <VotesCell>{votesPerHour.votes}</VotesCell>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default VotesPerHourMetrics;
