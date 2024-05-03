import * as React from 'react';
import {View, Text, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from '../screens/Setting';
import Surah from '../screens/Surah';
import JUZ from '../screens/JUZ';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailProduct from '../screens/DetailProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="JUZ" component={JUZ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigation>
      <Tab.Screen name="Surah" component={Surah} />
      <Tab.Screen name="JUZ" component={JUZ} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigation>
  );
}

export default Navigation;
