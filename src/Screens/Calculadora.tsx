import { Button, View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/navigation";
import { useState } from "react";

const Calculadora = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = (operador: string) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado(NaN);
      return;
    }

    let res = 0;
    switch (operador) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "x":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : NaN;
        break;
    }

    setResultado(res);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro valor"
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
      />

      <TextInput
        style={styles.input}
        placeholder="Segundo valor"
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calcular("+")} />
        <Button title="-" onPress={() => calcular("-")} />
        <Button title="x" onPress={() => calcular("x")} />
        <Button title="/" onPress={() => calcular("/")} />
      </View>

      {resultado !== null && (
        <Text style={styles.resultado}>
          Resultado: {isNaN(resultado) ? "Erro" : resultado}
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
    gap: 10,
  },
  resultado: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Calculadora;
