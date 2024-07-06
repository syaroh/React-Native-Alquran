import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

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
                navigation.navigate('Detail', {noSurat: item.nomor})
              }
              key={index}>
              <Text>
                {item.nomor}, {item.namaLatin}, Jumlah Ayat: {item.namaLatin}
              </Text>
              <Text style={styles.judul}>{item.nama}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default Surah;

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
