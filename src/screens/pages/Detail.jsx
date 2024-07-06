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
    <View style={styles.wrapperSurah}>
      <View style={styles.wrapperAyat}>
        {data &&
          data.map((item, i) => {
            <Text key={i} style={styles.wrapperNomor}>
              {item.nomor}
            </Text>;
            return (
              <Text key={i} style={styles.wrapperArab}>
                {item.teksArab}
              </Text>
            );
          })}
        <Text key={i} style={styles.wrapperIndo}>
          {item.teksIndonesia}
        </Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapperSurah: {
    flex: 1,
  },
  wrapperAyat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },

  wrapperArab: {
    flex: 1,
    fontSize: 19,
    lineHeight: 50,
  },
  wrapperIndo: {
    padding: 8,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
});
