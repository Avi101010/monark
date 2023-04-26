import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { ThemeColors, ThemeMargins, useTheme } from '../ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SectionTitleProps {
  title: string;
  right?: ReactNode;
  rightTitle?: string;
  rightOnPress?: ((event: GestureResponderEvent) => void) & (() => void)
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, right, rightTitle, rightOnPress }) => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors, theme.margin);

  return (
    <View style={[theme.layout.container, styles.container]}>
      <Text style={theme.text.subheader}>{title.toUpperCase()}</Text>
      <View style={[styles.line]} />
      {right && <View style={styles.rightComponent}>{right}</View>}
      {!right && rightTitle && 
        <TouchableOpacity onPress={rightOnPress} style={styles.rightComponent}>
          <Text style={[theme.text.subheader, { color: theme.colors.text }]}>{rightTitle.toUpperCase()}</Text>
        </TouchableOpacity> 
      }
    </View>
  );
};

function makeStyles(colors: ThemeColors, margins: ThemeMargins) {
  return(StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.subtext,
      marginLeft: margins.XS
    },
    rightComponent: {
      marginLeft: margins.XS
    },
  }));
}

export default SectionTitle;
