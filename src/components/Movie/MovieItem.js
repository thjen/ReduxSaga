import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

export default class MovieItem extends React.Component {
  render() {
    return (
      <View style={{marginTop: 10}}>
        <Text style={{padding: 10, fontWeight: 'bold', fontSize: 17, color: 'white', backgroundColor: 'mediumseagreen'}}>{`${this.props.item.note}, releaseYear = ${this.props.item.timestamp}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={() => {
              this.props.movieComponent.refs.editModal.showEditModal({...this.props.item});
            }}
            style={{width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'coral'}}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => (Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {
                  text: 'yes', onPress: () => {
                    this.props.movieComponent.props.onDeleteMovie(this.props.item.id);
                  }
                }
              ],
              {cancelable: true}
            ))}
            style={{width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'coral'}}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}