import React, { useEffect, useState } from "react";
import { CheckResults, Vote } from "../../../api";
import Brother from "../../../models/Brother";
import BrotherContainer from "../../atoms/BrotherContainer";
import Button from "../../atoms/Button";
import ResultsContainer from "../../molecules/ResultsContainer";

import {
  BrothersWrapper,
  ButtonWrapper,
  Container,
  Title,
  TitleWrapper,
  Warning,
  WallIcon,
} from "./styles";

const VotingModal: React.FC = () => {
  const [brothers, setBrothers] = useState<Brother[]>([]);
  const [votingResults, setVotingResults] = useState<Brother[]>([]);

  const [selected, setSelected] = useState("");
  const [voted, setVoted] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    async function getBrothers() {
      const results = await CheckResults();
      if (results.length > 0) {
        setBrothers(results);
      }
    }
    getBrothers();
  }, []);

  const handleClick = async () => {
    if (selected !== "") {
      const results = await Vote(selected);
      setVotingResults(results);
      setVoted(true);
    } else {
      setFailed(true);
    }
  };

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <Container>
      {brothers.length > 1 ? (
        <>
          <TitleWrapper>
            <WallIcon src='/images/wallIcon.png' alt='icone do paredao' />
            <Title>
              QUEM DEVE SER <strong>ELIMINADO</strong>?
            </Title>
          </TitleWrapper>

          {voted ? (
            <ResultsContainer voted={selected} brothers={votingResults} />
          ) : (
            <>
              <BrothersWrapper>
                {brothers.map((brother, index) => {
                  return (
                    <BrotherContainer
                      key={brother.id}
                      onClick={() => setSelected(brother.name)}
                      selected={selected === brother.name}
                      brother={brother}
                      number={index + 1}
                    />
                  );
                })}
              </BrothersWrapper>
              <ButtonWrapper>
                <Button onClick={handleClick}>Envie seu voto agora</Button>
                {failed && <Warning>⛔ Escolha algum Brother ⛔</Warning>}
              </ButtonWrapper>
            </>
          )}
        </>
      ) : (
        <Title>No momento não temos emparedados</Title>
      )}
    </Container>
  );
};

export default VotingModal;
