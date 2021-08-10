import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button, Modal, TouchableHighlight } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: '',
      msg: '',
      open: true
    };
  }
  sendOnWhatsApp=() => {
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if(mobile){
      if(msg){
        let url = 'whatsapp://send?text=' + this.state.msg + '&phone=234' + this.state.mobile_no;
        this.setState({open:false})
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
      }else{
        alert('Please insert message to send');
      }
    }else{
      alert('Please insert mobile no');
    }
  }
  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.state.open}>
      <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontSize: 18, fontWeight:'bold', paddingVertical: 30}}>
          shear your Location
        </Text>
        <TextInput
          value={this.state.mobile_no}
          onChangeText={mobile_no => this.setState({ mobile_no })}
          placeholder={'Enter Mobile'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <TextInput
          value={this.state.msg}
          onChangeText={msg => this.setState({ msg })}
          placeholder={'Enter message'}
          style={styles.input}
          numberOfLines={4}
          multiline={true}
        />
        <View style={{marginTop:20}}>
        <TouchableHighlight
        underlayColor="#205201"
        style={{ ...styles.openButton}}>
          <Text
            style={styles.btn}
            onPress={this.sendOnWhatsApp}
            >Send WhatsApp Message</Text>
        </TouchableHighlight>
        </View>
        </View>
        </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper:{
     backgroundColor: '#ffffff',
     width: '80%',
     height: '60%',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 10
  },
 input: {
   width: '80%',
   height: 44,
   padding: 10,
   margin: 10,
   backgroundColor: '#D3D3D3',
 },
 openButton: {
    width: 230,
    backgroundColor: '#205201',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10
  },
  btn:{
    color: 'white',
    fontSize: 16
  }
});