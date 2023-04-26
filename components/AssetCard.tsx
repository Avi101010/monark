import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeColors, ThemeMargins } from '../ThemeContext';
import { useTheme } from '../ThemeContext';

interface CustomImageProps {
  source: ImageSourcePropType;
  title?: string;
  price?: string;
  style?: StyleProp<ViewStyle>
}

const { width } = Dimensions.get('window');

const AssetCard: React.FC<CustomImageProps> = ({ style, source, title, price }) => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors, theme.margin);

  // Card spacing
  let margin = theme.layout.container.marginRight ?? theme.layout.container.marginHorizontal ?? theme.margin.MD;
  if (typeof(margin) == 'string') margin = parseInt(margin);
  const imageWidth = width - margin + 10;

  // Button
  const isWatchlisted = title?.includes('Caleb'); /* Demo hack */

  return (
    <View style={[theme.layout.container, styles.container, style ?? null]}>
      <View style={[styles.imageContainer, { width: imageWidth, transform: [{ translateX: margin / 2 + 5 }]}]}>
        <Image source={source} style={styles.image} />
        <TouchableOpacity style={[
          styles.iconButton, 
          { right: 10 + margin, backgroundColor: isWatchlisted ? theme.colors.primary : theme.colors.background }]
        }>
          <MaterialIcons name="remove-red-eye" size={24} color={ isWatchlisted ? theme.colors.background : theme.colors.text } />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {price && <Text style={styles.price}>{price}</Text>}
      </View>
    </View>
  );
};

function makeStyles(colors: ThemeColors, margins: ThemeMargins) {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: margins.SM
    },
    imageContainer: {
      borderRadius: 8,
      borderBottomLeftRadius: 36,
      overflow: 'hidden',
      elevation: 5,
      backgroundColor: colors.background,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 200,
    },
    iconButton: {
      position: 'absolute',
      top: margins.SM,
      backgroundColor: colors.background,
      borderRadius: 30,
      padding: 5,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    },
    title: {
      textAlign: 'left',
      fontWeight: 'bold',
      color: colors.text,
      fontSize: 18,
      marginTop: margins.XS
    },
    price: {
      textAlign: 'right',
      fontWeight: 'normal',
      color: colors.text,
      fontSize: 21,
      marginTop: margins.XS
    },
  });
}

export default AssetCard;
