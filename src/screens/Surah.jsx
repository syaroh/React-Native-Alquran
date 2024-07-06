import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Detail from './pages/Detail';
import React, {useEffect, useState} from 'react';

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
              onPress={() =>
                navigation.navigate('Detail', {noSurat: item.nomor})
              }
              key={index}>
              <Text style={{fontSize: 50}}>{item.nomor} </Text>
              <Text style={{fontSize: 50}}>{item.nama}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default Surah;

const styles = StyleSheet.create({});
