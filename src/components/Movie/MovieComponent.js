import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import MovieItem from './MovieItem';
import EditModal from '../Modal/EditModal';

export default class MovieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      note: '',
      timestamp: '',
      email: 'thjenit98@gmail.com'
    }
  }
  render() {
    return (
      <View style={{flex: 1, marginTop: 30, marginHorizontal: 20}}>
        <Text>Redux saga movie list</Text>
        <Text>New movie infomation</Text>
        <View style={{margin: 10, height: 100}}>
          <TextInput style={{flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({note: text})}
            value={this.state.note}
            placeholder='enter new movie'
          />
          <TextInput style={{flex: 1,width: 120, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({timestamp: text})}
            value={this.state.timestamp}
            placeholder='enter release'
          />
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={() => this.props.onFetchMovies('asc')}
            style={{justifyContent: 'center', alignItems: 'center', padding: 10, margin: 10, width: 100, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}>
            <Text style={{color: 'white'}}>Fetch movie</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.onAddMovie({note: this.state.note, timestamp: this.state.timestamp, email: this.state.email})}
            style={{justifyContent: 'center', alignItems: 'center', padding: 10, margin: 10, width: 100, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}>
            <Text style={{color: 'white'}}>Add movie</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={this.props.movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <MovieItem
              item={item}
              index={index}
              movieComponent={this}
              parentFlatList={this}
            />
          )}>

        </FlatList>
        <EditModal ref={'editModal'} movieComponent={this}/>
      </View>
    );
  }
}