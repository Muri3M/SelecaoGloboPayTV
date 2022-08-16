import React from "react";
import Brother from "../../../models/Brother";

import { BrotherName, BrotherPhoto, Container, Text } from "./styles";

interface BrotherProps {
  onClick: () => void;
  selected: boolean;
  brother: Brother;
  number: Number;
}

const BrotherContainer: React.FC<BrotherProps> = ({
  onClick,
  selected,
  brother,
  number,
}) => {
  return (
    <Container>
      <BrotherName>{brother.name}</BrotherName>
      <BrotherPhoto
        src={`/images/${brother.name}.png`}
        onClick={onClick}
        selected={selected}
      />
      <Text>
        Para eliminar o(a) <strong>{brother.name}</strong> pelo telefone disque{" "}
        <strong>0800-123-00{`${number}`}</strong> ou mande SMS para{" "}
        <strong>800{`${number}`}</strong>
      </Text>
    </Container>
  );
};

export default BrotherContainer;
