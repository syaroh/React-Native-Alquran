import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          backgroundColor: 'pink',
          height: 100,
          borderWidth: 2,
          borderColor: 'purple',
          marginLeft: 100,
        }}
      />

      <View
        style={{
          width: 212,
          backgroundColor: '#f2f2f2',
          padding: 12,
          borderRadius: 8,
        }}>
        <View
          style={{
            width: 188,
            height: 107,
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderRadius: 8,
          }}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: 'orange',
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Surabaya
        </Text>
        <View
          style={{
            backgroundColor: 'green',
            marginTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 100,
  },
});

export default StylingReactNativeComponent;
