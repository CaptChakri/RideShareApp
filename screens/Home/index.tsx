import { StyleSheet, Text, View, useColorScheme } from "react-native";

import { appColors } from "../../constants/theme";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Text style={[styles.title, { color: palette.textPrimary }]}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Home;
