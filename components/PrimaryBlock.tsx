import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeColors, ThemeMargins, useTheme } from '../ThemeContext';
import { colorOpacity } from '../Utils';
import OverlayCircle from '../assets/overlaycircle.png';

interface PrimaryBlockProps {
  header: string;
  mainValue: string;
  mainValueFontSize?: number;
  description?: string;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');

const PrimaryBlock: React.FC<PrimaryBlockProps> = ({
  header,
  mainValue,
  mainValueFontSize,
  description,
  onPress,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors, theme.margin);

  let margin = theme.layout.container.marginRight ?? theme.layout.container.marginHorizontal ?? theme.margin.MD;
  if (typeof (margin) == 'string') margin = parseInt(margin);
  const imageWidth = width - margin + 10;

  return (
    <View style={[theme.layout.container, { alignItems: 'center', paddingBottom: theme.margin.MD }]}>
      <View style={[styles.card, { transform: [{ translateX: margin / 2 + 5 }] }]}>
        <Image source={OverlayCircle} style={styles.fadedcircle} resizeMode="cover" />
        <View style={[theme.layout.container, { width: imageWidth, alignItems: 'flex-start' }]}>
          <Text style={styles.header}>{header}</Text>
          <Text style={[styles.mainValue, { fontSize: mainValueFontSize || 36 }]}>{mainValue}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        {onPress && (
          <TouchableOpacity style={[styles.button, { right: margin }]} onPress={onPress}>
            <MaterialIcons name="chevron-right" size={48} color={theme.colors.background} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

function makeStyles(colors: ThemeColors, margins: ThemeMargins) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      borderRadius: 8,
      borderBottomLeftRadius: 36,
      paddingVertical: margins.XS,
    },
    header: {
      color: colorOpacity(colors.background, 0.4),
      fontSize: 15,
      fontWeight: '600',
    },
    mainValue: {
      color: colors.background,
      fontWeight: 'normal',
      marginTop: margins.XS,
    },
    description: {
      color: colors.background,
      fontSize: 12,
      marginTop: margins.XS,
    },
    button: {
      padding: 10,
      borderRadius: 30,
      position: 'absolute'
    },
    fadedcircle: {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      right: -60,
      height: '130%',
    },
  });
}

export default PrimaryBlock;
