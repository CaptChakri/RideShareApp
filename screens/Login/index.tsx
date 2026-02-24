import type { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

import { PAGE_NAMES } from "../../constants/pages";
import { appColors } from "../../constants/theme";
import type { RootStackParamList } from "../../types/navigation";
import { persistGoogleAuthSession } from "../../utils/authSession";

type LoginProps = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  const isDarkMode = useColorScheme() === "dark";
  const palette = isDarkMode ? appColors.dark : appColors.light;
  const styles = createStyles(isDarkMode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    navigation.replace(PAGE_NAMES.ACTIVITY);
  };

  const onGoogleSignIn = () => {
    persistGoogleAuthSession();
    navigation.replace(PAGE_NAMES.ACTIVITY);
  };

  const onGoogleSignUp = () => {
    persistGoogleAuthSession();
    navigation.replace(PAGE_NAMES.ACTIVITY);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.formCard}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to book your next ride.</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={palette.placeholder}
          style={styles.input}
          value={email}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={palette.placeholder}
          secureTextEntry
          style={styles.input}
          value={password}
        />
        <Pressable onPress={onLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>

        <View style={styles.googleActions}>
          <Pressable onPress={onGoogleSignIn} style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </Pressable>
          <Pressable onPress={onGoogleSignUp} style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign up with Google</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const createStyles = (isDarkMode: boolean) => {
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: palette.background,
    },
    formCard: {
      width: "100%",
      maxWidth: 380,
      backgroundColor: palette.surface,
      borderRadius: 16,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      elevation: 4,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: palette.textPrimary,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: palette.textSecondary,
      marginBottom: 24,
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: palette.inputBorder,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 12,
      marginBottom: 14,
      fontSize: 16,
      color: palette.textPrimary,
      backgroundColor: palette.surface,
    },
    loginButton: {
      marginTop: 6,
      borderRadius: 10,
      backgroundColor: palette.buttonPrimary,
      alignItems: "center",
      paddingVertical: 14,
    },
    loginButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#FFF",
    },
    googleActions: {
      marginTop: 16,
      gap: 10,
    },
    googleButton: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: palette.buttonSecondaryBorder,
      alignItems: "center",
      paddingVertical: 12,
      backgroundColor: palette.surface,
    },
    googleButtonText: {
      fontSize: 15,
      fontWeight: "600",
      color: palette.buttonSecondaryText,
    },
  });
};

export default Login;
