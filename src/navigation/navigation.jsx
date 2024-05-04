import * as React from 'react';
import {View, Text, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import More from '../screens/More';
import Surah from '../screens/Surah';
import JUZ from '../screens/JUZ';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from '../screens/pages/Detail';
import JUZ1 from '../screens/pages/JUZ1';
import DetailSurah1 from '../screens/pages/DetailSurah1';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="JUZ" component={JUZ} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="DetailSurah1" component={DetailSurah1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigation>
      <Tab.Screen name="Surah" component={Surah} />
      <Tab.Screen name="JUZ" component={JUZ} />
      <Tab.Screen name="More" component={More} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="JUZ1" component={JUZ1} />
      <Stack.Screen name="DetailSurah1" component={DetailSurah1} />
    </Tab.Navigation>
  );
}

export default Navigation;
