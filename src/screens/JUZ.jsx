import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Detail from '../screens/pages/Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function JUZ({navigation}) {
  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={{
          height: 40,
          backgroundColor: '#da81da92',
          margin: 5,
          marginBottom: 0,
          marginLeft: 4,
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
            <View
              style={{
                width: 810,
                margin: 5,
                backgroundColor: '#da81da92',
                padding: 5,
                border: 5,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <ScrollView horizontal={true}>
                {/* jus 1 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 1
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL FATIHAH AYAT 1 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL BAQARAH AYAT 141
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 2 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 2
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL BAQARAH AYAT 142-
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL BAQARAH AYAT 252
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 3 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 3
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL BAQARAH AYAT 253-
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    ALI - IMRAN AYAT 92
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 4 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 4
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    ALI IMRAN AYAT 93 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AN NISA' AYAT 23
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 5 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 5
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AN NISA' AYAT 24 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AN NISA' AYAT 147
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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
            <View
              style={{
                width: 810,
                margin: 5,
                backgroundColor: '#da81da92',
                padding: 5,
                border: 5,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <ScrollView horizontal={true}>
                {/* jus 6 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 6
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AN NISA' AYAT 148 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL MAIDAH AYAT 81
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 7 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 7
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL MAIDAH AYAT 82 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL AN'AM AYAT 110
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 8 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 8
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL AN'AM AYAT 111 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL A'RAF AYAT 87
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 9 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 9
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL A'RAF AYAT 88 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL ANFAL AYAT 40
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 10 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 10
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL ANFAL AYAT 41 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AT TAUBAH AYAT 92
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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
        {/* Akhir View 2 */}

        {/* view 3 */}
        <View>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 810,
                margin: 5,
                backgroundColor: '#da81da92',
                padding: 5,
                border: 5,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <ScrollView horizontal={true}>
                {/* jus 11 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 11
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AT TAUBAH AYAT 93 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    HUD AYAT 5
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 12 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 12
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    HUD AYAT 6 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    YUSUF AYAT 52
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 13 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 13
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    YUSUF AYAT 53 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    IBRAHIM AYAT 52
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 14 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 14
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL HIJR AYAT 1 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL NAHL AYAT 128
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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

                {/* jus 15 */}
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: 'white',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    margin: 5,
                    marginBottom: 45,
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10140077_inc_ecommerce_d533.png',
                    }}
                    style={{
                      width: 60,
                      height: 50,
                      borderColor: 'purple',
                      backgroundColor: 'purple',
                      borderRadius: 8,
                    }}
                  />

                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    JUZ 15
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    AL ISRA' AYAT 1 -
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'orange',
                      marginBottom: 12,
                    }}>
                    AL KAHFI AYAT 74
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      marginTop: 6,
                      paddingBottom: 6,
                      borderRadius: 25,
                    }}>
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
        {/* Akhir View 3 */}

        {/* View 4 */}
        {/* akhir View 4 */}
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
});
