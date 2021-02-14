import { DarkTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { COLORS } from '../core/colors';
/**
 * Main theme for the app that overrides theme from paper and navigation
 */
export const MainTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...COLORS,
  },
};

export type Theme = typeof MainTheme;
