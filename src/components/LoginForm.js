import React from "react";
import { Button, Text, TextInput } from "react-native";

export default function LoginForm() {
  return (
    <>
      <Text>Login form </Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Button title="Login" />
    </>
  );
}
