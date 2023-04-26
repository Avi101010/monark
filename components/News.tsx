import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Dimensions } from 'react-native';
import { ThemeColors, ThemeMargins, useTheme } from '../ThemeContext';
import SectionTitle from './SectionTitle';

interface Article {
  imageSource: ImageSourcePropType;
  title: string;
}

const ArticleCard: React.FC<Article> = ({ imageSource, title }) => {
  const theme = useTheme();
  const styles = makeArticleStyles(theme.colors, theme.margin);

  return (
    <View style={[theme.layout.container, styles.articleContainer]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

function makeArticleStyles(colors: ThemeColors, margins: ThemeMargins) {
  return StyleSheet.create({
    articleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '100%'
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      borderBottomLeftRadius: 24,
      marginRight: margins.SM,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      color: colors.text,
      fontSize: 15,
      fontWeight: 'normal',
    },
  });
}

const News: React.FC = () => {
  const articles = [
    { 
      imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Photos_NewYork1_032.jpg/800px-Photos_NewYork1_032.jpg', 
      title: 'Wall Street in turmoil after lumber supply shock.' 
    },
    { 
      imageSource: 'https://i.insider.com/5fe3e46aedf89200180939e2?width=1136&format=jpeg', 
      title: 'Hudson Yards becomes number one median in Manhattan.' 
    },
    { 
      imageSource: 'https://www.avail.co/wp-content/uploads/2021/10/what-are-the-benefits-of-investing-in-real-estate.jpg', 
      title: 'Mortgage rates rise, but sales also increase.' 
    }
  ];
  const theme = useTheme();
  const styles = makeNewsStyles(theme.colors, theme.margin);

  return (
    <View style={styles.container}>
      <SectionTitle title="Today's News" />
      {articles.map((article, index) => (
        <ArticleCard key={index} imageSource={{ uri: article.imageSource }} title={article.title} />
      ))}
    </View>
  );
};

function makeNewsStyles(colors: ThemeColors, margins: ThemeMargins) {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      paddingBottom: margins.MD,
      paddingTop: margins.SM
    },
  });
}


export default News;
