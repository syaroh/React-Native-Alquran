import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Lainnya = ({navigation}) => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 2,
        borderRadius: 20,
        backgroundColor: '#da81da92',
      }}>
      <View
        style={{
          height: 150,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 5,
          backgroundColor: 'white',
          borderRadius: 4,
        }}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/36/c4/55/36c455b3a2cf9953ca0021932fbeb388.jpg',
          }}
          style={{
            width: 90,
            height: 90,
            backgroundColor: 'purple',
            borderRadius: 50,
            flexDirection: 'row',
            marginRight: 35,
            marginLeft: 15,
          }}
        />
        <View>
          <Text style={styles.judul}>Al Quran 30 Juz</Text>
          <Text style={{color: 'black'}}>Offline</Text>
        </View>
      </View>
      {/* Menu 1 */}
      <View style={styles.viewMenu}>
        <Text style={styles.menu}>Opsi Lain</Text>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Detail')}>
          <Ionicons name="newspaper-outline" style={styles.icon} />
          <Text style={styles.submenu}>Doa Doa Harian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Detail')}>
          <Ionicons name="musical-note-outline" style={styles.icon} />
          <Text style={styles.submenu}>Al Quran MP3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Detail')}>
          <Ionicons name="sparkles-outline" style={styles.icon} />
          <Text style={styles.submenu}>Asmaul Husna</Text>
        </TouchableOpacity>
      </View>
      {/* Akhir Menu 1 */}
      {/* Menu 2 */}
      <View style={styles.viewMenu}>
        <Text style={styles.menu}>Umum</Text>

        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Detail')}>
          <Ionicons name="alert-circle-outline" style={styles.icon} />
          <Text style={styles.submenu}>Info Aplikasi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Detail')}>
          <Ionicons name="share-social-outline" style={styles.icon} />
          <Text style={styles.submenu}>Bagikan</Text>
        </TouchableOpacity>
      </View>
      {/*Akhir Menu 2  */}
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  viewMenu: {
    borderBottomWidth: 3,
    borderColor: 'white',
    borderRadius: 4,
    marginTop: 10,
  },

  menu: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginLeft: 15,
  },
  submenu: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    margin: 10,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  tombol: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 8,
    color: 'purple',
  },
});
