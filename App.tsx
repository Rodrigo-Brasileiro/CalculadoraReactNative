import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/Login";
import Welcome from "./src/Screens/Welcome";
import Calculadora from "./src/Screens/Calculadora";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStack>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
