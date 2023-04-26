import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from './types';
import ScrollableBackground from '../components/ScrollableBackground';
import TextHeader from '../components/TextHeader';
import AssetCard from '../components/AssetCard';

type AssetListProps = {
  navigation: StackNavigationProp<MainTabsParamList, 'AssetList'>;
};

const FakeAssetData = [
  ['420 Caleb Ave.', '$45.72', 'https://apollostore.blob.core.windows.net/aventine/uploads/assets/hero2.ac63bde5-494f-460b-aeb4-bfa3a5a070bd.ca04ae97-2861-4c36-b02c-f572810164b3.jpg'],
]

const Watchlist: React.FC<AssetListProps> = ({ navigation }) => {
  return (
    <ScrollableBackground>
      <TextHeader text='watchlist' />
      {FakeAssetData.map((x, i) => 
        <AssetCard title={x[0]} price={x[1]} source={{ uri: x[2] }} key={i} />
      )}
    </ScrollableBackground>
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

export default Watchlist;