import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Detail = ({route}) => {
  const [listAyat, setlistAyat] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      await axios.get(route.params.surahId).then(res => {
        console.log(res.data.data.verses);
        setlistAyat(res.data.data.verses);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilData();
  });
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={listAyat}
        renderItem={(item, index) => (
          <View style={styles.wrapperSurah}>
            <View style={styles.wrapperAyat}>
              <Text style={styles.wrapperNumber}>
                {item.item.number.inSurah}
              </Text>
              <Text style={styles.wrapperArab}>{item.item.text.arab}</Text>
            </View>

            <Text style={styles.wrapperIndo}>{item.item.translation.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapperSurah: {
    flex: 1,
    padding: 8,
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
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 8,
  },
});
