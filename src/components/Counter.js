import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Counter extends React.Component {
  render() {
    return (
      <View>
        <Text style={{margin: 30, fontSize: 20, fontWeight: 'bold'}}>Welcome to redux saga</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={() => {this.props.onDecrement(1)}}
            style={{width: 100, height: 50, backgroundColor: 'coral', margin: 10, alignItems:  'center', justifyContent: 'center'}}>
            <Text>Decrement -</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.onIncrement(1)}
            style={{width: 100, height: 50, backgroundColor: 'yellow', margin: 10, alignItems:  'center', justifyContent: 'center'}}>
            <Text>Increment +</Text>
          </TouchableOpacity>
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>Counts: {this.props.times}</Text>
      </View>
    )
  }
}