import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const SettingsScreen = ({ navigation }) => {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => goToPage("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({})

export default SettingsScreen;
