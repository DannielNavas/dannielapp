import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToPage = () => {
    navigation.navigate("Settings");
  }
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Go to Settings" onPress={goToPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
