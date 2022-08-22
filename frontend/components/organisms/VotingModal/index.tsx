import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CheckResults, Vote, CreateSampleVoting } from "../../../api";
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
  const [recaptcha, setRecaptcha] = useState("empty");

  const [voted, setVoted] = useState(false);
  const [missingSelect, setMissingSelect] = useState(false);
  const [validate, setValidate] = useState(false);

  const key = process.env.NEXT_PUBLIC_SITE_KEY || "";

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
    setMissingSelect(false);

    if (selected !== "") {
      const results = await Vote(selected, recaptcha);
      if (typeof results !== "string") {
        setVotingResults(results);
        setVoted(true);
      } else {
        setValidate(true);
      }
    } else {
      setMissingSelect(true);
    }
  };

  function handleChange(value: any) {
    setRecaptcha(value);
    setValidate(false);
  }

  function refreshPage() {
    window.location.reload();
  }

  const createSample = async () => {
    console.log("oi");
    const results = await CreateSampleVoting();
    setBrothers(results);
  };

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
            <>
              <Button onClick={refreshPage}>Votar novamente</Button>
              <ResultsContainer voted={selected} brothers={votingResults} />
            </>
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
                <ReCAPTCHA sitekey={key} onChange={handleChange} />
                <Button onClick={handleClick}>Envie seu voto agora</Button>
                {missingSelect && (
                  <Warning>⛔ Escolha algum Brother ⛔</Warning>
                )}
                {validate && <Warning>⛔ Valide o ReCaptcha ⛔</Warning>}
              </ButtonWrapper>
            </>
          )}
        </>
      ) : (
        <>
          <Title>No momento não temos emparedados</Title>
          <Button onClick={createSample}>Criar paredão de amostra</Button>
        </>
      )}
    </Container>
  );
};

export default VotingModal;
