import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Button } from "react-native";
import { RootStack } from "../types/navigation";

const Welcome = ({ route, navigation }: NativeStackScreenProps<RootStack, "Welcome">) => {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {username}!</Text>
      <Button
        title="Ir para a Calculadora"
        onPress={() => navigation.navigate("Calculadora")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
});

export default Welcome;
