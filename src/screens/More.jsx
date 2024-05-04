import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const More = () => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 2,
        borderRadius: 20,
      }}>
      <View
        style={{
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 15,
          backgroundColor: '#da81da92',
        }}>
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: 'orange',
            borderRadius: 50,
            flexDirection: 'row',
            marginRight: 35,
            marginLeft: 15,
          }}
        />
        <View>
          <Text style={styles.judul}>Al Quran 30 Juz</Text>
          <Text>Ofline</Text>
        </View>
      </View>

      <View style={{borderBottomWidth: 3, borderColor: '#da81da92'}}>
        <Text style={styles.menu}>Opsi Lain</Text>
        <Text style={styles.submenu}>Doa Doa Harian</Text>
        <Text style={styles.submenu}>Al Quran MP3</Text>
        <Text style={styles.submenu}>Asmaul Husna</Text>
      </View>

      <View
        style={{marginTop: 15, borderBottomWidth: 3, borderColor: '#da81da92'}}>
        <Text style={styles.menu}>Umum</Text>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="alert-circle" style={{fontSize: 25}} />
          <Text style={styles.submenu}>Info Aplikasi</Text>
        </View>

        <Text style={styles.submenu}>Bagikan</Text>
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  menu: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginLeft: 15,
  },

  submenu: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    margin: 5,
    marginLeft: 50,
    marginBottom: 10,
    flexDirection: 'row',
  },
});
