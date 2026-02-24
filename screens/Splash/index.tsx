import type { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { Image, StyleSheet, View, useColorScheme } from "react-native";

import { PAGE_NAMES } from "../../constants/pages";
import { appColors } from "../../constants/theme";
import { SPLASH_TIMEOUT_MS } from "../../constants/timeouts";
import type { RootStackParamList } from "../../types/navigation";
import { hasGoogleAuthSession } from "../../utils/authSession";

type SplashProps = StackScreenProps<RootStackParamList, "Splash">;

const Splash = ({ navigation }: SplashProps) => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      const nextPage = hasGoogleAuthSession() ? PAGE_NAMES.ACTIVITY : PAGE_NAMES.LOGIN;
      navigation.replace(nextPage);
    }, SPLASH_TIMEOUT_MS);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Image style={styles.logo} source={require("../../assets/splash.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: {},
});

export default Splash;
