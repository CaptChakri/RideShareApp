import { ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";

import { appColors } from "../../constants/theme";

const Settings = () => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={[styles.row, { backgroundColor: palette.surface }]}>
        <Text style={[styles.label, { color: palette.textPrimary }]}>Username</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 16,
    margin: 12,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Settings;
