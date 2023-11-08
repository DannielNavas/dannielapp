import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToPage = () => {
    navigation.navigate("Settings");
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Settings" onPress={goToPage} />
    </View>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
