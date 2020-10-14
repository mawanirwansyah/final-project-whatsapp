import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar, Badge } from 'react-native-paper';
import axios from 'axios';

import Cat from '../asset/cat.jpg';
import Kucing from '../asset/kucing.jpg';

// type Props = {};

const Status = () => {
  return (

    <View>
      <List.Item
        title="Agung Prastio"
        description="32 menit yang lalu"
        left={props => 
          <Avatar.Image size={60} source={Cat} />
        }
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}}
      />

    <List.Item
        title="Kucing"
        description="Hari ini 22.00"
        left={props => 
          <Avatar.Image size={60} source={Kucing} />
        }
        
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}}
      />

    </View>
  );
}

export default Status;