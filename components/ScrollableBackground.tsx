import React from 'react';
import {
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { useTheme } from '../ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScrollableBackground: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <>
      <ImageBackground source={theme.backgroundImage} style={styles.backgroundImage} />
      <ScrollView
        alwaysBounceVertical={true}
        contentContainerStyle={[styles.scrollViewContent, {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },]}>
        {children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  safeArea: {
    // flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
});


export default ScrollableBackground;