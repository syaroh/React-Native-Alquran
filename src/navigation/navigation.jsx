import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from '../screens/User';
import Home from '../screens/Home';
import Product from '../screens/Product';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailProduct from '../screens/DetailProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigation>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigation>
  );
}

export default Navigation;
