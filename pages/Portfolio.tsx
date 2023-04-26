import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from './types';
import ScrollableBackground from '../components/ScrollableBackground';
import TextHeader from '../components/TextHeader';

type PortfolioProps = {
  navigation: StackNavigationProp<MainTabsParamList, 'Portfolio'>;
};

const Portfolio: React.FC<PortfolioProps> = ({ navigation }) => {
  return (
    <ScrollableBackground>
      <TextHeader text='portfolio' />
    </ScrollableBackground>
  );
};

export default Portfolio;