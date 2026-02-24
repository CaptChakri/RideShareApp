import type { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

import { PAGE_NAMES } from "../../constants/pages";
import { hasGoogleAuthSession } from "../../utils/authSession";
import { SPLASH_TIMEOUT_MS } from "../../constants/timeouts";
import type { RootStackParamList } from "../../types/navigation";

type SplashProps = StackScreenProps<RootStackParamList, "Splash">;

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      const nextPage = hasGoogleAuthSession() ? PAGE_NAMES.ACTIVITY : PAGE_NAMES.LOGIN;
      navigation.replace(nextPage);
    }, SPLASH_TIMEOUT_MS);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/splash.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: {},
});

export default Splash;
