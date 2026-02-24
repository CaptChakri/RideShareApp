import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

import { PAGE_NAMES } from "../../constants/pages";
import { appColors } from "../../constants/theme";
import HomeScreen from "../../screens/Home";
import SettingsScreen from "../../screens/Settings";
import type { BottomTabParamList } from "../../types/navigation";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Menubar = () => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          switch (route.name) {
            case PAGE_NAMES.HOME: {
              const homeIcon = focused ? "home" : "home-outline";
              return <Ionicons color={color} name={homeIcon} size={size} />;
            }
            case PAGE_NAMES.SETTINGS: {
              const settingsIcon = focused ? "settings" : "settings-outline";
              return <Ionicons color={color} name={settingsIcon} size={size} />;
            }
            default:
              return null;
          }
        },
        tabBarActiveTintColor: palette.buttonPrimary,
        tabBarInactiveTintColor: palette.textSecondary,
        tabBarStyle: {
          backgroundColor: palette.surface,
          borderTopColor: palette.inputBorder,
        },
        headerStyle: {
          backgroundColor: palette.surface,
        },
        headerTintColor: palette.textPrimary,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={PAGE_NAMES.HOME} component={HomeScreen} />
      <Tab.Screen name={PAGE_NAMES.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Menubar;
