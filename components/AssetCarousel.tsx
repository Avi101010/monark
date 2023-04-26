import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AssetCard from './AssetCard';
import { useTheme } from '../ThemeContext';

const FakeAssetData = [
  ['1234 Jeremy St.', '$50.23', 'https://msprealestateinc.com/wp-content/uploads/2020/12/Grove.jpg'],
  ['420 Caleb Ave.', '$45.72', 'https://apollostore.blob.core.windows.net/aventine/uploads/assets/hero2.ac63bde5-494f-460b-aeb4-bfa3a5a070bd.ca04ae97-2861-4c36-b02c-f572810164b3.jpg'],
  ['100 Paul Ln.', '$88.05', 'https://images1.apartments.com/i2/yWUn7nBzQ5MZZVShTGUy29o9aYFQB2muLyVdaexZ1fQ/117/image.jpg'],
  ['690 Benjamin St.', '$64.51', 'https://resource.rentcafe.com/image/upload/x_0,y_0,w_3504,h_2013,c_crop/q_auto,f_auto,c_lfill,w_576,ar_1.564,g_auto/s3/2/111668/img%200189.jpg'],
]

const { width: screenWidth } = Dimensions.get('window');

const AssetCarousel: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item, index }: { item: string[], index: number }) => {
    return <AssetCard key={index} source={{ uri: item[2] }} title={item[0]} price={item[1]} />;
  };

  return (
    <View style={{ height: 270, marginBottom: theme.margin.MD }}>
      <View style={{ flex: 1 }}>
        <Carousel
          data={FakeAssetData}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
          width={screenWidth}
          style={styles.carousel}
        />
      </View>
      <View style={[theme.layout.container, styles.paginationContainer]}>
          {FakeAssetData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 0
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    width: 24,
  },
  inactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default AssetCarousel;
