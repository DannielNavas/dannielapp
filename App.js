import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import NavigationTab from "./src/navigation/NavigationTab";



export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <LoginForm />
        <Saludar name="danniel navas" />
        <Saludar name="leslye navarro" />
        <Text>Default</Text>
        <DefautlProps />
        <DefautlProps firstname="Leslye" lastname="Navarro" />
        <Text>Validate</Text>
        <ValidateProps firstname="Leslye" lastname="Navarro" />
      </View> */}
      {/* <NavigationStack /> */}

      <NavigationTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
