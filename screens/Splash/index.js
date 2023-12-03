import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { SPLASH_TIMEOUT } from "constants/timeouts";
import { PAGE_NAMES } from "constants/pages";

const SplashPage = ({ navigation }) => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigation.replace(PAGE_NAMES.HOME);
    }, SPLASH_TIMEOUT);

    return () => clearTimeout(splashTimer);
  });

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: {},
});

export default SplashPage;
