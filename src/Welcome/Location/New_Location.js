import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  TextInput,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";

class New_Location extends Component {
  state = {
    modalVisible: true,
    name:"",
    latitude: null,
    longitude: null,
    description:""
  };

  handleModal = () =>{
    this.setState({ modalVisible: false });
    this.props.navigation.push('Welcome')
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor="#005201" barStyle='light-content' />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          {/* <ScrollView> */}
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
                placeholder="Name"
                underlineColorAndroid="transparent"
                placeholderTextColor="#005201"
                style={styles.inputs}
                onChangeText={(name)=> this.setState({name:name})}
            />
             <TextInput 
                placeholder="Latitude"
                underlineColorAndroid="transparent"
                keyboardType='numeric'
                placeholderTextColor="#005201"
                style={styles.inputs}
                onChangeText={(val)=> this.setState({latitude:val})}
            />
             <TextInput 
                placeholder="Longitude"
                underlineColorAndroid="transparent"
                keyboardType='numeric'
                placeholderTextColor="#005201"
                style={styles.inputs}
                onChangeText={(val)=> this.setState({longitude:val})}
            />
            <TextInput 
                placeholder="Description"
                underlineColorAndroid="transparent"
                placeholderTextColor="#005201"
                multiline={true}
                maxLength={200}
                style={styles.inputs}
                onChangeText={(description)=> this.setState({description:description})}
            />
            <TouchableHighlight
              underlayColor="#205201"
              style={{ ...styles.openButton}}>
              <Text  
              color="#005201"
              style={styles.btn}
              onPress={this.handleModal}
              >Create Location</Text>
            </TouchableHighlight>
          </View>
          </View>
          {/* </ScrollView> */}
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    width: '80%',
    height: '55%',
    elevation: 15
  },
  innerView:{
    width: '80%',
    height: '45%',
  },
  inputs:{
    width: '100%',
    marginTop: 10,
    backgroundColor: '#E8ECF0',
    borderRadius: 10,
    paddingLeft: 15
  },
  openButton: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#205201',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 15
  },
  btn:{
    color: 'white',
    fontSize: 16
  }
});
export default New_Location;
