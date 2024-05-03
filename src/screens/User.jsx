import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const User = () => {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', height: 50, width: 50}} />
          <View style={{backgroundColor: '#aa5902', height: 50, width: 50}} />
          <View style={{backgroundColor: '#cc9966', height: 50, width: 50}} />
          {/* <View style={{backgroundColor: '#ee7845', height: 50, width: 50}} /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Alamat</Text>
          <Text>Keranjang</Text>
          <Text>Pembelian</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 5,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'orange',
              borderRadius: 50,
              flexDirection: 'row',
              marginRight: 14,
            }}>
            <Icon name="user" size={50} color="#900" />
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
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
