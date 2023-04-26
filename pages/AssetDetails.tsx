import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type AssetDetailsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AssetDetails'>;
};

const Home: React.FC<AssetDetailsProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asset Details</Text>
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

export default Home;