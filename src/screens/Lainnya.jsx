import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

const BASE_URL = 'https://equran.id/api/v2/surat';
const Lainnya = ({navigation}) => {
  const [audio, setAudio] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch('https://equran.id/api/v2/surat');
      const hasil = await dataApi.json();
      return setAudio(hasil.data);
      // console.log(hasil.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilData();
  }, []);
  return (
    <ScrollView>
      {audio &&
        audio.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.boxText}
              onPress={() =>
                navigation.navigate('DetailSurah1', {deskripsi: item.nama})
              }
              key={index}>
              <Text>
                {item.nomor}. {item.namaLatin}, Jumlah Ayat: {item.jumlahAyat},
              </Text>
              <Text style={styles.judul}>{item.nama}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default Lainnya;

const styles = StyleSheet.create({});
