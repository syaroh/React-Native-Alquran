import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import DetailProduct from './DetailProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Product({navigation}) {
  return (
    <View>
      <ScrollView>
        {/* View 1 */}
        <View>
          <View
            style={{
              width: 350,
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                {/* jus 1 */}
                <View
                  style={{
                    width: 150,
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                {/* jus 1 */}
                <View
                  style={{
                    width: 150,
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
                      width: 130,
                      height: 107,
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
                      onPress={() => navigation.navigate('DetailProduct')}>
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
