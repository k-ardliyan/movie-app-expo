import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/screens/HomeScreen';
import SearchScreen from '@/screens/SearchScreen';
import FavoriteScreen from '@/screens/FavoriteScreen';
import MovieDetailScreen from '@/screens/MovieDetailScreen';
import { RootStackParamList } from '@/types/Navigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favorite" component={FavoriteScreen} />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="SearchTab" component={SearchStack} />
      <Tab.Screen name="FavoriteTab" component={FavoriteStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
