import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { ReactElement, createContext, useContext, useState } from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import DefaultBackground from './assets/defaultbackground.png';
import { colorOpacity } from './Utils';

// ============ Interfaces ============ //

export interface AppTheme extends Theme {
  colors: ThemeColors;
  margin: ThemeMargins;
  text: StyleSheet.NamedStyles<{
    title: Object,
    header: Object,
    subheader: Object
  }>;
  layout: StyleSheet.NamedStyles<{
    container: Object,
  }>;
  backgroundImage: ImageSourcePropType;
}

export interface ThemeColors {
  dark: string;
  light: string;
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  background: string;
  card: string;
  text: string;
  subtext: string;
  border: string;
  notification: string;
}

export interface ThemeMargins {
  XS: number;
  SM: number;
  MD: number;
  LG: number;
  XL: number;
}

// ========= Base Theme Values ========= //

const DefaultColors: ThemeColors = {
  ...DefaultTheme.colors,
  dark: '#051D4D',
  light: '#38AAF0',
  primary: '#3671E5',
  secondary: '#FFD700',
  tertiary: '#6D214F',
  error: '#AD2831',
  background: '#FFFFFF',
  text: '#2D3643',
  subtext: colorOpacity('#2D3643', .5)
};

const DefaultDarkColors: ThemeColors = {
  ...DefaultColors,
  ...DarkTheme.colors,
};

const DefaultMargin: ThemeMargins = {
  XS: 15,
  SM: 20,
  MD: 40,
  LG: 60,
  XL: 80
}

// =========== Style Sheets =========== //

const makeTextStyles = (colors: ThemeColors, margin: ThemeMargins) => {
  return StyleSheet.create({
    title: {
      fontSize: 32,
      marginBottom: margin.XS,
      color: colors.text,
    },
    header: {
      fontWeight: "600",
      fontSize: 21,
      width: '100%',
      textAlign: 'left',
      color: colors.text,
    },
    subheader: {
      fontWeight: "600",
      fontSize: 13,
      textAlign: 'left',
      color: colors.subtext 
    }
  });
};

const makeLayoutStyles = (margin: ThemeMargins) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: margin.MD,
      paddingBottom: margin.XS,
      width: '100%'
    }
  })
}

// =========== Style Classes ========== //

/** Context that holds base theme values and helpful styles. */
const ThemeContext = createContext<AppTheme & { toggleTheme: () => void }>({
  toggleTheme: () => { },
  ...DefaultTheme,
  colors: DefaultColors,
  margin: DefaultMargin,
  backgroundImage: DefaultBackground,
  text: makeTextStyles(DefaultColors, DefaultMargin),
  layout: makeLayoutStyles(DefaultMargin),
});

/** Provider for the ThemeContext. */
export default function ThemeProvider({ children }: { children: ReactElement<any> }): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => { setIsDarkMode(prevIsDarkMode => !prevIsDarkMode) };

  // Choose base values
  const colors: ThemeColors = isDarkMode ? DefaultDarkColors : DefaultColors;
  const margin: ThemeMargins = DefaultMargin;

  // Create style components (might depend on base values)
  const base: Theme = isDarkMode ? DarkTheme : DefaultTheme;
  const text = makeTextStyles(colors, margin);
  const layout = makeLayoutStyles(margin);

  // Build theme
  const theme: AppTheme = {
    ...base,
    colors,
    margin,
    backgroundImage: DefaultBackground,
    text,
    layout
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, ...theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
export { ThemeContext };
