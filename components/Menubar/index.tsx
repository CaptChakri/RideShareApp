import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcon from "react-native-vector-icons/Ionicons";

import { PAGE_NAMES } from "../../constants/pages";
import HomeScreen from "../../screens/Home";
import SettingsScreen from "../../screens/Settings";
import type { BottomTabParamList } from "../../types/navigation";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Menubar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          switch (route.name) {
            case PAGE_NAMES.HOME: {
              const homeIcon = focused ? "home" : "home-outline";
              return <IonIcon color={color} name={homeIcon} size={size} />;
            }
            case PAGE_NAMES.SETTINGS: {
              const settingsIcon = focused ? "settings" : "settings-outline";
              return <IonIcon color={color} name={settingsIcon} size={size} />;
            }
            default:
              return null;
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={PAGE_NAMES.HOME} component={HomeScreen} />
      <Tab.Screen name={PAGE_NAMES.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Menubar;
