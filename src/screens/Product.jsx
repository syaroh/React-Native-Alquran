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
          <Text style={styles.text}>Produk Baru</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 700,
                margin: 10,
                backgroundColor: 'pink',
                padding: 10,
                border: 5,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '700', marginLeft: 10}}>
                2 hari Yang Lalu
              </Text>
              <ScrollView horizontal={true}>
                <View
                  style={{
                    width: 150,
                    margin: 10,
                    backgroundColor: 'gray',
                    padding: 10,
                    border: 5,
                    borderColor: 'purple',
                    borderRadius: 8,
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
                    New Macbook
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    Rp. 25.000.000
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                    Surabaya
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
                        BELI
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    width: 150,
                    margin: 10,
                    backgroundColor: 'gray',
                    padding: 10,
                    borderColor: 'purple',
                    borderRadius: 8,
                  }}>
                  <Image
                    source={{
                      uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                    }}
                    style={{
                      width: 130,
                      height: 107,
                      borderColor: 'purple',
                      backgroundColor: 'white',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    New Macbook
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    Rp. 25.000.000
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                    Surabaya
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
                        BELI
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    width: 150,
                    margin: 10,
                    backgroundColor: 'gray',
                    padding: 10,
                    borderColor: 'purple',
                    borderRadius: 8,
                  }}>
                  <Image
                    source={{
                      uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                    }}
                    style={{
                      width: 130,
                      height: 107,
                      borderColor: 'purple',
                      backgroundColor: 'white',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                    New Macbook
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 12,
                      color: 'orange',
                    }}>
                    Rp. 25.000.000
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                    Surabaya
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
                        BELI
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
          <Text style={styles.text}>Produk baru</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 150,
                margin: 10,
                backgroundColor: 'gray',
                padding: 10,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <Image
                source={{
                  uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                }}
                style={{
                  width: 130,
                  height: 107,
                  borderColor: 'purple',
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
              />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                New Macbook
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 12,
                  color: 'orange',
                }}>
                Rp. 25.000.000
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                Surabaya
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
                    BELI
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: 150,
                margin: 10,
                backgroundColor: 'gray',
                padding: 10,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <Image
                source={{
                  uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                }}
                style={{
                  width: 130,
                  height: 107,
                  borderColor: 'purple',
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
              />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                New Macbook
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 12,
                  color: 'orange',
                }}>
                Rp. 25.000.000
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                Surabaya
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
                    BELI
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* Akhir View 2 */}

        {/* View 3 */}
        <View>
          <Text style={styles.text}>Styling Component</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 150,
                margin: 10,
                backgroundColor: 'gray',
                padding: 10,
                border: 5,
                borderColor: 'purple',
                borderRadius: 8,
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

              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                New Macbook
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 12,
                  color: 'orange',
                }}>
                Rp. 25.000.000
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                Surabaya
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
                    BELI
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: 150,
                margin: 10,
                backgroundColor: 'gray',
                padding: 10,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <Image
                source={{
                  uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                }}
                style={{
                  width: 130,
                  height: 107,
                  borderColor: 'purple',
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
              />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                New Macbook
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 12,
                  color: 'orange',
                }}>
                Rp. 25.000.000
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                Surabaya
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
                    BELI
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: 150,
                margin: 10,
                backgroundColor: 'gray',
                padding: 10,
                borderColor: 'purple',
                borderRadius: 8,
              }}>
              <Image
                source={{
                  uri: 'https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/id_ID/accdb09369ceff709d4fc42f5c8e1ddf.png',
                }}
                style={{
                  width: 130,
                  height: 107,
                  borderColor: 'purple',
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
              />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
                New Macbook
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 12,
                  color: 'orange',
                }}>
                Rp. 25.000.000
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
                Surabaya
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
                    BELI
                  </Text>
                </TouchableOpacity>
              </View>
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
    marginLeft: 100,
  },
});
