import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PAGE_NAMES } from "./constants/pages";
import Activity from "./screens/Activity";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import type { RootStackParamList } from "./types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // @ts-ignore react type declarations are provided by runtime in this project setup
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGE_NAMES.SPLASH}>
        <Stack.Screen
          name={PAGE_NAMES.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PAGE_NAMES.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PAGE_NAMES.ACTIVITY}
          component={Activity}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
