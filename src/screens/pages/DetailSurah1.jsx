import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

const DetailSurah1 = ({route}) => {
  const {deskripsi} = route.params;
  const [datas, setDatas] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      const dataApi = await fetch(
        `https://equran.id/api/v2/surat/${deskripsi}`,
      );
      const hasil = await dataApi.json();
      return setDatas(hasil.data.item);
      // console.log(hasil.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilData();
  });
  return (
    <ScrollView>
      <FlatList
        data={datas}
        renderItem={(item, index) => (
          <View style={styles.wrapperSurah}>
            <Text>{item.deskripsi}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default DetailSurah1;

const styles = StyleSheet.create({});
