import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const audioQuran = ({route}) => {
  const {audio} = route.params;
  const [data, setData] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch(`https://equran.id/api/v2/surat/${audio}`);
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

export default audioQuran;

const styles = StyleSheet.create({});
