import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Detail = ({route}) => {
  const {noSurat} = route.params;
  const [data, setData] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch(`https://equran.id/api/v2/surat/${noSurat}`);
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
        data.map((item, i) => {
          return <Text key={i}>{item.teksArab}</Text>;
        })}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
