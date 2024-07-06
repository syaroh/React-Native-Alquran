import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function JUZ({navigation}) {
  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={{
          height: 40,
          backgroundColor: 'white',
          margin: 5,
          marginBottom: 5,
          marginLeft: 4,
          marginTop: 20,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>JUZ 1 - 30</Text>
      </View>
      <ScrollView>
        {/* View 1 */}
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.kotakBesar}>
              <ScrollView horizontal={true}>
                {/* jus 1 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 1</Text>
                  <Text style={styles.surah1}>AL FATIHAH AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL BAQARAH AYAT 141</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 2 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 2</Text>
                  <Text style={styles.surah1}>AL BAQARAH AYAT 142-</Text>
                  <Text style={styles.surah2}>AL BAQARAH AYAT 252</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 3 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 3</Text>
                  <Text style={styles.surah1}>AL BAQARAH AYAT 253-</Text>
                  <Text style={styles.surah2}>ALI - IMRAN AYAT 92</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 4 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 4</Text>
                  <Text style={styles.surah1}>ALI IMRAN AYAT 93 -</Text>
                  <Text style={styles.surah2}>AN NISA' AYAT 23</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 5 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 5</Text>
                  <Text style={styles.surah1}>AN NISA' AYAT 24 -</Text>
                  <Text style={styles.surah2}>AN NISA' AYAT 147</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          color: 'white',
                          textAlign: 'center',
                        }}>
                        BACA
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* Akhir View 1 */}

        {/* View 2 */}
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.kotakBesar}>
              <ScrollView horizontal={true}>
                {/* jus 6 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 6</Text>
                  <Text style={styles.surah1}>AN NISA' AYAT 148 -</Text>
                  <Text style={styles.surah2}>AL MAIDAH AYAT 81</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 7 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 7</Text>
                  <Text style={styles.surah1}>AL MAIDAH AYAT 82 -</Text>
                  <Text style={styles.surah2}>AL AN'AM AYAT 110</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 8 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 8</Text>
                  <Text style={styles.surah1}>AL AN'AM AYAT 111 -</Text>
                  <Text style={styles.surah2}>AL A'RAF AYAT 87</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 9 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 9</Text>
                  <Text style={styles.surah1}>AL A'RAF AYAT 88 -</Text>
                  <Text style={styles.surah2}>AL ANFAL AYAT 40</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 10 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 10</Text>
                  <Text style={styles.surah1}>AL ANFAL AYAT 41 -</Text>
                  <Text style={styles.surah2}>AT TAUBAH AYAT 92</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* Akhir View 2 */}

        {/* view 3 */}
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.kotakBesar}>
              <ScrollView horizontal={true}>
                {/* jus 11 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 11</Text>
                  <Text style={styles.surah1}>AT TAUBAH AYAT 93 -</Text>
                  <Text style={styles.surah2}>HUD AYAT 5</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 12 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 12</Text>
                  <Text style={styles.surah1}>HUD AYAT 6 -</Text>
                  <Text style={styles.surah2}>YUSUF AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 13 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 13</Text>
                  <Text style={styles.surah1}>YUSUF AYAT 53 -</Text>
                  <Text style={styles.surah2}>IBRAHIM AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 14 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 14</Text>
                  <Text style={styles.surah1}>AL HIJR AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL NAHL AYAT 128</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 15 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 15</Text>
                  <Text style={styles.surah1}>AL ISRA' AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL KAHFI AYAT 74</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* Akhir View 3 */}

        {/* View 4 */}
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.kotakBesar}>
              <ScrollView horizontal={true}>
                {/* jus 11 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 11</Text>
                  <Text style={styles.surah1}>AT TAUBAH AYAT 93 -</Text>
                  <Text style={styles.surah2}>HUD AYAT 5</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 12 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 13</Text>
                  <Text style={styles.surah1}>HUD AYAT 6 -</Text>
                  <Text style={styles.surah2}>YUSUF AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 13 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 14</Text>
                  <Text style={styles.surah1}>YUSUF AYAT 53 -</Text>
                  <Text style={styles.surah2}>IBRAHIM AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 14 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 15</Text>
                  <Text style={styles.surah1}>AL HIJR AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL NAHL AYAT 128</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 15 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 16</Text>
                  <Text style={styles.surah1}>AL ISRA' AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL KAHFI AYAT 74</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* akhir View 4 */}

        {/* View 5 */}
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.kotakBesar}>
              <ScrollView horizontal={true}>
                {/* jus 11 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 11</Text>
                  <Text style={styles.surah1}>AT TAUBAH AYAT 93 -</Text>
                  <Text style={styles.surah2}>HUD AYAT 5</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 12 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 12</Text>
                  <Text style={styles.surah1}>HUD AYAT 6 -</Text>
                  <Text style={styles.surah2}>YUSUF AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 13 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 13</Text>
                  <Text style={styles.surah1}>YUSUF AYAT 53 -</Text>
                  <Text style={styles.surah2}>IBRAHIM AYAT 52</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 14 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 14</Text>
                  <Text style={styles.surah1}>AL HIJR AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL NAHL AYAT 128</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* jus 15 */}
                <View style={styles.kotakJuz}>
                  <Text style={styles.angkaJuz}>JUZ 17</Text>
                  <Text style={styles.surah1}>AL ISRA' AYAT 1 -</Text>
                  <Text style={styles.surah2}>AL KAHFI AYAT 74</Text>
                  <View style={styles.tombolBaca}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('JUZ1')}>
                      <Text style={styles.baca}>BACA</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* akhir View 5 */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    // marginTop: 5,
    textAlign: 'center',
  },

  kotakBesar: {
    width: 790,
    margin: 5,
    backgroundColor: '#da81da92',
    padding: 5,
    border: 5,
    borderColor: 'purple',
    borderRadius: 8,
  },

  kotakJuz: {
    width: 150,
    height: 115,
    backgroundColor: 'white',
    padding: 10,
    border: 5,
    borderColor: 'purple',
    borderRadius: 8,
    marginLeft: 5,
  },

  angkaJuz: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  baca: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },

  tombolBaca: {
    backgroundColor: 'purple',
    paddingBottom: 5,
    borderRadius: 25,
  },

  surah1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
  },

  surah2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 5,
  },
});
