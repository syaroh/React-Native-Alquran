import {View, Text, Touchable, TouchableOpacity, FlatList} from 'react-native';
import React, {Component} from 'react';

class JUZ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(Response => Response.json())
      .then(json => {
        this.setState({data: json});
        console.log(json);
      });
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity onPress={() => this.getData()}>
          <Text
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {' '}
            Get data
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default JUZ;
