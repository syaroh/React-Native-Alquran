import {StyleSheet} from 'react-native';
import React from 'react';
import Lainnya from './screens/Lainnya';
import Surah from './screens/Surah';
import JUZ from './screens/JUZ';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detail from './screens/pages/Detail';
import DetailSurah1 from './screens/pages/DetailSurah1';
import audioSurat from './screens/pages/audioSurat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JUZ"
          component={JUZ}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={Detail} />
        {/* <Stack.Screen name="JUZ1" component={JUZ1} /> */}
        {/* <Stack.Screen name="audioSurat" component={audioSurat} /> */}
        <Stack.Screen name="DetailSurah1" component={DetailSurah1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'SURAH') {
            iconName = 'book-outline';
          } else if (route.name === 'JUZ') {
            iconName = 'list-outline';
          } else {
            iconName = 'grid-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'purple',
        // tabBarInactiveTintColor: ''
      })}>
      <Tab.Screen
        name="SURAH"
        component={Surah}
        // options={{headerShown: false}}
      />
      <Tab.Screen name="JUZ" component={JUZ} />
      <Tab.Screen
        name="LAINNYA"
        component={Lainnya}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({});
