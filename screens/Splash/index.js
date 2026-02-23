import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { SPLASH_TIMEOUT_MS } from "constants/timeouts";
import { PAGE_NAMES } from "constants/pages";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigation.replace(PAGE_NAMES.LOGIN);
    }, SPLASH_TIMEOUT_MS);

    return () => clearTimeout(splashTimer);
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("assets/splash.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: {},
});

export default Splash;
