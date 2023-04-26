import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from './types';
import ScrollableBackground from '../components/ScrollableBackground';
import TextHeader from '../components/TextHeader';

type AccountProps = {
  navigation: StackNavigationProp<MainTabsParamList, 'Account'>;
};

const Portfolio: React.FC<AccountProps> = ({ navigation }) => {
  return (
    <ScrollableBackground>
      <TextHeader text='account' />
    </ScrollableBackground>
  );
};

export default Portfolio;