import type { Theme } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const appColors = {
  light: {
    background: "#F5F7FB",
    surface: "#FFFFFF",
    textPrimary: "#111111",
    textSecondary: "#666666",
    inputBorder: "#D9DFEA",
    buttonPrimary: "#2979FF",
    buttonSecondaryBorder: "#CED5E3",
    buttonSecondaryText: "#1E293B",
    placeholder: "#888888",
  },
  dark: {
    background: "#0F172A",
    surface: "#1E293B",
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    inputBorder: "#334155",
    buttonPrimary: "#3B82F6",
    buttonSecondaryBorder: "#475569",
    buttonSecondaryText: "#E2E8F0",
    placeholder: "#94A3B8",
  },
};

export const getNavigationTheme = (isDarkMode: boolean): Theme => {
  const baseTheme = isDarkMode ? DarkTheme : DefaultTheme;
  const palette = isDarkMode ? appColors.dark : appColors.light;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: palette.background,
      card: palette.surface,
      text: palette.textPrimary,
      border: palette.inputBorder,
      primary: palette.buttonPrimary,
    },
  };
};
