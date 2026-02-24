import { StyleSheet, Text, View, useColorScheme } from "react-native";

import { appColors } from "../../../constants/theme";

const Profile = () => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Text style={[styles.text, { color: palette.textPrimary }]}>Profile</Text>
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
    fontSize: 18,
  },
});

export default Profile;
