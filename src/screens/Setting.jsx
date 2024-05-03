import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const User = () => {
  return (
    <View style={{backgroundColor: '#da81da92'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          marginLeft: 10,
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'gray',
            borderRadius: 50,
            flexDirection: 'row',
            marginRight: 14,
          }}>
          <Icon
            name="user"
            size={80}
            style={{color: 'white', marginLeft: 15, marginTop: 5}}
          />
          {/* <Text style={{fontSize: 18, color: 'purple', marginTop: 100}}>
              My Profile
            </Text> */}
        </View>

        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            000378
          </Text>
          <Text>5 Juta Pengikut</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            height: 30,
            width: 115,
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontWeight: '700',
              color: 'purple',
            }}>
            KERANJANG
          </Text>
        </View>

        <View
          style={{
            marginTop: 2,
            flexDirection: 'row',
            backgroundColor: 'white',
            // alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 20,
              width: 150,
              backgroundColor: '#da81da92',
            }}>
            <Text>Laptop Macbook Pro</Text>
          </View>
          <View style={{backgroundColor: '#da81da92', height: 20, width: 150}}>
            <Text>Laptop Macbook Pro 2</Text>
          </View>
          {/* <View style={{backgroundColor: '#da81da92', height: 30, width: 120}}>
            <Text
              style={{textAlign: 'center', marginTop: 5, fontWeight: '700'}}>
              PEMBELIAN
            </Text>
          </View> */}
          {/* <View style={{backgroundColor: '#ee7845', height: 50, width: 50}} /> */}
        </View>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
