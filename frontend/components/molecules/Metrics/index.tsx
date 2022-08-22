import React, { useEffect, useState } from "react";
import { CheckResults } from "../../../api";
import Brother from "../../../models/Brother";
import BrotherMetrics from "../../atoms/BrotherMetrics";
import VotesPerHourMetrics from "../../atoms/VotesPerHourMetrics";

import {
  BrothersContainer,
  Container,
  Divider,
  OrangeText,
  Text,
} from "./styles";

const Metrics: React.FC = () => {
  const [brothers, setBrothers] = useState<Brother[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getBrothers() {
      const results = await CheckResults();
      if (results.length > 0) {
        setBrothers(results);
        let partialTotal = 0;
        results.forEach((result) => {
          partialTotal += result.votes;
        });
        setTotal(partialTotal);
      }
    }
    getBrothers();
  }, []);

  return (
    <Container>
      {brothers.length > 1 ? (
        <>
          <Text>Total de geral de votos:</Text>
          <OrangeText> {total}</OrangeText>
          <Divider />

          <Text>Votos por emparedado:</Text>
          <BrothersContainer>
            {brothers.map((brother) => {
              return <BrotherMetrics key={brother.id} brother={brother} />;
            })}
          </BrothersContainer>
          <Divider />

          <Text>Votos por Hora:</Text>

          <VotesPerHourMetrics brothers={brothers} />
        </>
      ) : (
        <Text>No momento não temos emparedados</Text>
      )}
    </Container>
  );
};

export default Metrics;
