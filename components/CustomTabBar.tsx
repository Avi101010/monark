import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const IconComponent = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (index === 2) {
          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={styles.homeButton}>
              {IconComponent ? IconComponent({ focused: isFocused, size: 30, color: isFocused ? '#673ab7' : '#222' }) : null}
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabBarButton}>
            {IconComponent ? IconComponent({ focused: isFocused, size: 24, color: isFocused ? '#673ab7' : '#222' }) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
  },
  homeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    marginBottom: 20,
    elevation: 5,
  },
});

export default CustomTabBar;
