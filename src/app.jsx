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
import User from './screens/User';
import Home from './screens/Home';
import Product from './screens/Product';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailProduct from './screens/DetailProduct';
// import DetailProduct from './screens/Detail-Product';

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
          name="Product"
          component={Product}
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

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Product') {
            iconName = 'cart';
          } else {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'purple',
        // tabBarInactiveTintColor: ''
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{headerShown: false, tabBarBadge: 3}}
      />
      <Tab.Screen name="User" component={User} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({});
