import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import logo from '../Images/logo.png'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible: true,
            active: false,
            mobile_no: '',
            msg: '',
        }
    }

    render(){
      return (
        <View style={styles.root}>
        <StatusBar backgroundColor="#005201" barStyle='light-content' />
        <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo}/>
        </View>
          <Text style={styles.title}>Welcome to Ahmadu Bello University</Text>
          <TouchableHighlight
          underlayColor="#dff"
          style={styles.btnWrapper}
          onPress={ () => this.props.navigation.navigate('Location')}>
          <Text
          style={styles.btn}
          >Search Location</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#dff"
            style={styles.btnWrapper}
            onPress={ () => this.props.navigation.navigate('New_Location')}>
          <Text
            style={styles.btn}
            >New Location</Text>
          </TouchableHighlight>
        <View>
        </View>
        </View> 
  );
};  
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005201',
  },
  title:{
    color: 'white',
    paddingBottom: 20,
    fontFamily: 'roboto',
    fontSize: 16
  },
  logoWrapper:{
    marginBottom: 70,
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100
  },
  logo:{
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnWrapper:{
    marginTop: 10,
    width: '75%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 15
  },
  btn:{
    color: '#005201',
    fontSize: 16
  }
});

export default Welcome;


