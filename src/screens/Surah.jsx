import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

const BASE_URL = 'https://api.quran.gading.dev/';

const Surah = ({navigation}) => {
  const [surah, setSurah] = useState([]);

  const ambilData = async () => {
    try {
      // proses ambil data
      axios.get(`${BASE_URL}surah`).then(res => {
        console.log(res.data.data);
        setSurah(res.data.data);
      });
      // console.log(hasil.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilData();
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={surah}
        renderItem={(item, index) => (
          <TouchableOpacity
            style={styles.wrapperSurah}
            onPress={() => {
              navigation.navigate('Detail', {
                surahId: `${BASE_URL}surah/${item.item.number}`,
              });
            }}>
            <Text style={styles.wrapperNumber}>{item.item.number}.</Text>
            <View style={styles.wrapperNameSurah}>
              <View>
                <Text style={{fontSize: 16}}>
                  {item.item.name.transliteration.id}
                </Text>
                <Text>
                  {item.item.revelation.id} - {item.item.numberOfVerses} Ayat
                </Text>
              </View>
              <Text style={{fontSize: 20}}>{item.item.name.short}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Surah;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperNumber: {
    alignItems: 'center',
    margin: 5,
  },
  wrapperSurah: {
    flexDirection: 'row',
    margin: 8,
  },
  wrapperNameSurah: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
});
