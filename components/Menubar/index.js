import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";

import HomeScreen from "screens/Home";
import SettingsScreen from "screens/Settings";
import { PAGE_NAMES } from "constants/pages";

const Tab = createBottomTabNavigator();

const Menubar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          switch (route.name) {
            case PAGE_NAMES.HOME:
              const homeIcon = focused ? "home" : "home-outline";
              return <IoIcon name={homeIcon} size={size} />;
            case PAGE_NAMES.SETTINGS:
              const settingsIcon = focused ? "settings" : "settings-outline";
              return <IoIcon name={settingsIcon} size={size} />;
            default:
              return null;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.MenubarContainer,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  MenubarContainer: {
    // https://stackoverflow.com/a/74505836/21663235
    paddingBottom: 0,
  },
});

export default Menubar;
