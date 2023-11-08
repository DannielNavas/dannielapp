import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const SettingsScreen = ({ navigation }) => {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => goToPage("Home")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})

export default SettingsScreen;
