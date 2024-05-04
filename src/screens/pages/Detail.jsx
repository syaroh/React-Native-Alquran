import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Detail = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache',
          },
          body: 'Your Body goes here',
        }}
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
