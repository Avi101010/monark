import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../ThemeContext';

const TextHeader: React.FC<{ text: string }> = ({ text }) => {
  const theme = useTheme();

  return (
    <View style={[theme.layout.container, { marginBottom: theme.margin.SM }]}>
      <Text style={theme.text.header}>{text.toLowerCase()}</Text>
    </View>
  );
};

export default TextHeader;