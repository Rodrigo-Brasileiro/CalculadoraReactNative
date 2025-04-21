import { Button, Text, TextInput, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/navigation";
import { useState } from "react";

const Login = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  const [username, setUsername] = useState("");

  return (
    <ScrollView>
      <Text>User</Text>
      <TextInput
        placeholder="email"
        keyboardType="email-address"
        onChangeText={setUsername}
      />
      <Text>Password</Text>
      <TextInput placeholder="password" secureTextEntry={true} />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Welcome", { username })}
      />
    </ScrollView>
  );
};
export default Login;
