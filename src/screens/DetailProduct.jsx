import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Product from './Product';

const DetailProduct = () => {
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

export default DetailProduct;

const styles = StyleSheet.create({});
