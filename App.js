import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PAGE_NAMES } from "constants/pages";
import Splash from "screens/Splash";
import Activity from "screens/Activity";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGE_NAMES.SPLASH}>
        <Stack.Screen
          name={PAGE_NAMES.SPLASH}
          component={Splash}
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
