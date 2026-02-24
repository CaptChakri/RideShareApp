import { StyleSheet, View, useColorScheme } from "react-native";

import Menubar from "../../components/Menubar";
import { appColors } from "../../constants/theme";

const Activity = () => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Menubar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Activity;
