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
  ['1234 Jeremy St.', '$50.23', 'https://msprealestateinc.com/wp-content/uploads/2020/12/Grove.jpg'],
  ['420 Caleb Ave.', '$45.72', 'https://apollostore.blob.core.windows.net/aventine/uploads/assets/hero2.ac63bde5-494f-460b-aeb4-bfa3a5a070bd.ca04ae97-2861-4c36-b02c-f572810164b3.jpg'],
  ['100 Paul Ln.', '$88.05', 'https://images1.apartments.com/i2/yWUn7nBzQ5MZZVShTGUy29o9aYFQB2muLyVdaexZ1fQ/117/image.jpg'],
  ['690 Benjamin St.', '$64.51', 'https://resource.rentcafe.com/image/upload/x_0,y_0,w_3504,h_2013,c_crop/q_auto,f_auto,c_lfill,w_576,ar_1.564,g_auto/s3/2/111668/img%200189.jpg'],
]

const Home: React.FC<AssetListProps> = ({ navigation }) => {
  return (
    <ScrollableBackground>
      <TextHeader text='assets' />
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

export default Home;