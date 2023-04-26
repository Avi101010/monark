import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppTheme, useTheme } from '../ThemeContext';
import ScrollableBackground from '../components/ScrollableBackground';
import SectionTitle from '../components/SectionTitle';
import TextHeader from '../components/TextHeader';
import AssetCarousel from '../components/AssetCarousel';
import PrimaryBlock from '../components/PrimaryBlock';
import AssetCard from '../components/AssetCard';
import News from '../components/News';

type HomeProps = {
  navigation: StackNavigationProp<MainTabsParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <ScrollableBackground>
      <TextHeader text='home' />
      <SectionTitle title='NEAR YOU' rightTitle='SEE ALL' rightOnPress={() => { navigation.navigate("AssetList") }} />
      <AssetCarousel />
      <SectionTitle title='YOUR PORTFOLIO' />
      <PrimaryBlock header='Total Value' mainValue='$5032' onPress={() => { navigation.navigate("Portfolio") }} />
      <SectionTitle title='WATCHLIST' rightTitle='SEE ALL' rightOnPress={() => { navigation.navigate("AssetList") }} />
      <AssetCard 
        title='420 Caleb Ave.' price='$45.72'
        source={{ uri: 'https://apollostore.blob.core.windows.net/aventine/uploads/assets/hero2.ac63bde5-494f-460b-aeb4-bfa3a5a070bd.ca04ae97-2861-4c36-b02c-f572810164b3.jpg' }}
        style={{ paddingBottom: theme.margin.MD }}
       />
      <News />
    </ScrollableBackground>
  );
};

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    }
  })
};


export default Home;