import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
      let arrowImg = require('./app/img/back-bt.png');
      let dotsImg = require('./app/img/dots@3x.png');
      let zoomImg = require('./app/img/off.png');
      let starImg = require('./app/img/pinned-off.png');
      let dialogImg = require('./app/img/internal-bt.png');
      let messagegAva = require('./app/img/write-icon@3x.png');
      let messagegAvaSmall = require('./app/img/write-icon@3x.png');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerInside}>
            <Image source={arrowImg}  style={styles.backBt} />
            <Text style={styles.contactName}>
                Sandra Arlington
            </Text>
                <Image source={dialogImg}  style={styles.tapArea} />
                <Image source={starImg}  style={styles.tapArea} />
                <Image source={zoomImg}  style={styles.tapArea} />
                <Image source={dotsImg}  style={styles.tapAreaDots} />
            </View>
        </View>
          <View style={styles.timeToollBar}>
              <Text style={styles.timeText}>Today, 02:14PM</Text>
          </View>
          <View style={styles.messageBody}>
              <View style={styles.leftStrip} />
              <View style={styles.messageContent}>
                  <Image source={messagegAva}  style={styles.messagegAva} />
                  <Image source={messagegAvaSmall}  style={styles.messagegAvaSmall} />
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.custName}>Automated Newsletter</Text>
                <Text>Sent 02:14PM</Text>
                <Text>to sarlington@gmail.com</Text>
                <Text>Introducing Tiffanys Victoria Collection</Text>
                <Text>Dazzling pear-shaped, round brilliant and marquise diamonds are intricately handcrafted into jewelry of unparalleled elegance and grace...</Text>
                <Text>Read More</Text>
              </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    custName:{
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#030303',
        letterSpacing: 0
    },
    messageContainer:{
    },
    messageContent: {
    },
    messagegAvaSmall:{
        width: 20,
        height: 20,
        top: -19,
        left: 38,
    },

    messagegAva:{
        width: 50,
        height: 50,
        left: 10,
    },
    leftStrip: {
        width: 5,
        height: 140,
        backgroundColor: '#33acc8'
    },
    messageBody: {
        height: 130,
        top: 12,
        flexWrap: 'wrap',
        flexDirection:'row',
    },
    timeToollBar:{
        height: 12.5,
        alignItems:'center'
    },



    timeText:{
        top: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#989898',
    },



    header:{
        height: 84,
        backgroundColor: '#f2f2f2',
    },
    headerInside:{
        top: 20,
        flexWrap: 'wrap',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    backBt:{
        width: 45,
        height: 45,
    },
    tapArea:{
        width: 18,
        height: 18
    },
    tapAreaDots:{
        width: 6,
        height: 20
    },
    contactName:{
        left: -30,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: 'bold',
        color: "#030303"
    },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
