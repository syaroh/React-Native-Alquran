// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Flexbox from './FlexBox';
// import StylingReactNativeComponent from './StylingReactNativeComponent';
// import SampleComponent from './SampleComponent';
// import Navigation from './navigation/navigation';

// const app = () => {
//   return (
//     <Navigation></Navigation>
//     <View>
//       <Flexbox />
//       {/* <MyTabs /> */}
//       {/* <StylingReactNativeComponent /> */}
//     </View>
//   );
// };

// export default app;

// const styles = StyleSheet.create({});

// In App.js in a new project

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Setting from './screens/Setting';
import Surah from './screens/Surah';
import JUZ from './screens/JUZ';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailProduct from './screens/DetailProduct';

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
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
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
        options={{headerShown: false}}
      />
      <Tab.Screen name="JUZ" component={JUZ} options={{headerShown: false}} />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({});
