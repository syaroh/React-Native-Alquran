import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'blue',
        }}
      />
      <Add />
      <Text>Mai</Text>
      <Text>Syaroh</Text>
      <Foto />
      <TextInput style={{borderWidth: 1}} />
      <BoxRed />
      <Profile />
    </View>
  );
};

const Add = () => {
  return <Text>Nama Lengkap Rohimatul</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://images.app.goo.gl/7tNzP9FoqQoPgUFu8'}}
      style={{width: 90, height: 80}}
    />
  );
};

class BoxRed extends Component {
  render() {
    return <Text>Ini Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.app.goo.gl/7tNzP9FoqQoPgUFu8',
          }}
          style={{height: 80, width: 80, borderRadius: 100, borderColor: 'red'}}
        />
        <Text>Ini Foto Kedua</Text>
      </View>
    );
  }
}

export default SampleComponent;
