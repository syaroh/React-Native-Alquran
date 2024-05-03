import {Image, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import macbook form './macbook.jpeg';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartwrap}>
        <Image source={macbook} style={{styles.iconMac}} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center', flexDirection: 'column'}
    cartwrap: {borderWidth: 1, borderColor: '#439801', width: 93, height: 93, borderRadius: 93 / 2, alignItems: 'center', justifyContent: 'center', position: 'relative'},
    iconMac: {width: 50, height: 50},
    text: {fontSize12, color: '#777777', fontWeight: '200', marginTop: 8,},
    notif: {fontSize: 12, color: 'white', backgroundColor: 'blue', padding: 4, borderRadius: 25, width: 24, height: 24, position: 'absolute', top: 0, right: 0,},
});
