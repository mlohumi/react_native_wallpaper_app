import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        {title: 'Deepika', key: '1'},
        {title: 'Sunny', key: '2'},
        {title: 'Kareena', key: '3'},
        {title: 'Raveena', key: '4'},
        {title: 'Priyanka', key: '5'},
      ],
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={globalStyles.container}>
        <FlatList
          data={this.state.data1}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Second', item)}>
              <Card>
                <Image
                  style={{width: 300, height: 400}}
                  source={images.ratings[item.key]}
                />
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}
