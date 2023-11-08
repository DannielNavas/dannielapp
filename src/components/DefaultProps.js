import React from "react";
import { Text } from "react-native";

const DefautlProps = ({firstname, lastname}) => {
  return (
    <>
      <Text>Hola {firstname}  { lastname }</Text>

    </>
  );
}

DefautlProps.defaultProps = {
  firstname: "Danniel",
  lastname: "Navas"
}

export default DefautlProps;
