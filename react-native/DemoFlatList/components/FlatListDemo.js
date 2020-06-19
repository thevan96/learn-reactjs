import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import data from '../mockData';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  itemImage: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state.listViewData = Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  }
  render() {
    const {id, name, description, image} = this.props.item;
    return (
      <View
        style={{
          ...styles.item,
          ...{
            backgroundColor:
              id % 2 === 0
                ? 'rgba(220, 223, 172, 0.8)'
                : 'rgba(147, 201, 75, 0.5)',
          },
        }}>
        <Image source={{uri: image}} style={styles.itemImage} />
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12,
            }}>
            {name}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12,
            }}>
            {description}
          </Text>
        </View>
        <SwipeListView
          data={this.state.listViewData}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text>Left</Text>
              <Text>Right</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

class FlatListDemo extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item, index}) => (
            <FlatListItem item={item} key={index.toString()} />
          )}
        />
      </View>
    );
  }
}

export default FlatListDemo;
