import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login, Home, Watchlist, AssetList, Portfolio, AssetDetails,
  PurchaseSellAssets, Documents, Account
} from './pages';
import ThemeProvider from './ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomTabBar from './components/CustomTabBar';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Watchlist" component={Watchlist}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
      <Tab.Screen name="AssetList" component={AssetList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
      <Tab.Screen name="Portfolio" component={Portfolio}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = () => {

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="AssetDetails" component={AssetDetails} />
          <Stack.Screen name="PurchaseSellAssets" component={PurchaseSellAssets} />
          <Stack.Screen name="Documents" component={Documents} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
