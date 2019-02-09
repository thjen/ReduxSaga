import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';

const {width, height} = Dimensions.get('window');
export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      id: '',
      name: '',
      year: '',
      email: 'thjenxxxno6@gmail.com'
    }
  }
  showEditModal = (item) => {
    this.setState({
      id: item.id,
      name: item.note,
      year: item.timestamp,
      email: 'thjenxxxno6@gmail.com'
    });
    console.log(this.state);
    this.refs.myModal.open();
  }
  render() {
    return (
      <Modal ref={'myModal'}
        style={{justifyContent: 'center', borderRadius: 20, shadowRadius: 10, width: width - 80, height: 200}}
        position='center'
        backdrop={true}
        onClosed={() => {}}>
        <Text>Movie infomation</Text>
        <TextInput style={{height: 40, borderBottomColor: 'gray', marginHorizontal: 30, marginTop :20, marginBottom: 10, borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          placeholder="movie's name" 
        />
        <TextInput style={{height: 40, borderBottomColor: 'gray', marginHorizontal: 30, marginTop :20, marginBottom: 10, borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({year: text})}
          value={this.state.year}
          placeholder="movie's name" 
        />
        <TouchableOpacity 
          onPress={() => {
            this.props.movieComponent.props.onUpdateMovie({id: this.state.id, note: this.state.name, timestamp: this.state.year, email: this.state.email})  
            this.refs.myModal.close();
          }}
          style={{padding: 10,justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'mediumseagreen'}}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}