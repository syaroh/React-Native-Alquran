import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class Flexbox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', height: 50, width: 50}} />
          <View style={{backgroundColor: '#aa5902', height: 50, width: 50}} />
          <View style={{backgroundColor: '#cc9966', height: 50, width: 50}} />
          <View style={{backgroundColor: '#ee7845', height: 50, width: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>

          {/* <Image
            source={{
              uri: 'https://yt3.ggpht.com/jlSc8SNyRpuQ6tFVrE0tcznuGcc_cjCtYyg_aheotC6U610joOlCfMU88gE-IJUJUvqxo5u_=s600-c-k-c0x00ffffff-no-rj-rp-mo',
            }}
            style={{width: 100, height: 100}}
          /> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 5,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'orange',
              borderRadius: 50,
              flexDirection: 'row',
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              MahasiswaKreatif
            </Text>
            <Text>5 Juta Subcribers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flexbox;
