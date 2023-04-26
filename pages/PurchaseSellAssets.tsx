import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type PurchaseSellProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PurchaseSellAssets'>;
};

const PurchaseSellAssets: React.FC<PurchaseSellProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchase / Sell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  }
});

export default PurchaseSellAssets;