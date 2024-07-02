import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Surah = ({navigation}) => {
  const [data, setData] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch('https://equran.id/api/v2/surat');
      const hasil = await dataApi.json();
      return setData(hasil.data);
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
      {data &&
        data.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.boxText}
              onPress={() =>
                navigation.navigate('Detail', {NoSurat: item.nomor})
              }
              key={index}>
              <Text style={styles.judul}>{item.nama}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 18,
  },
  tombol: {
    backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical: 2,
  },
});

export default Surah;
