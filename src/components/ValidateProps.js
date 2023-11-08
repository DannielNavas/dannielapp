import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";

const ValidateProps = ({firstname, lastname}) => {
  return (
    <>
      <Text>Hola {firstname}  { lastname }</Text>

    </>
  );
}

// ValidateProps.defaultProps = {
//   firstname: "Danniel",
//   lastname: "Navas"
// }

ValidateProps.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}

export default ValidateProps;
