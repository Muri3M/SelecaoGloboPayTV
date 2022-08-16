import React, { useEffect, useState } from "react";
import { CheckResults } from "../../../api";
import Brother from "../../../models/Brother";
import BrotherMetrics from "../../atoms/BrotherMetrics";

import { BrothersContainer, Container, Text } from "./styles";

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
      <Text>Total de geral votos:</Text>
      <Text style={{ color: "#fc9414" }}> {total}</Text>
      <BrothersContainer>
        {brothers.map((brother) => {
          return <BrotherMetrics key={brother.id} brother={brother} />;
        })}
      </BrothersContainer>
    </Container>
  );
};

export default Metrics;
