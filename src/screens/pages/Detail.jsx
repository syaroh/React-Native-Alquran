import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const Detail = ({route}) => {
  const {NoSurat} = route.params;
  const [data, setData] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch('https://equran.id/api/v2/surat/1');
      const hasil = await dataApi.json();
      return setData(hasil.data.ayat);
      // console.log(hasil.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilData();
  });
  return (
    <View>
      {data &&
        data.map((item, index) => {
          return <Text key={index}>{item.teksArab}</Text>;
        })}
    </View>
  );
};
export default Detail;

const styles = StyleSheet.create({});
