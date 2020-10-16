import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar, Badge } from 'react-native-paper';
import axios from 'axios';

import Wes from '../asset/wes.jpg';
import Cat from '../asset/cat.jpg';
import User from '../asset/user.jpg';

// type Props = {};

const Calls = () => {
  return (

<View>
      <List.Item
        title="Pak Edwin"
        description="Hari ini 18.43"
        left={props => 
          
          <Avatar.Image size={60} source={Wes} />
          
        }
        right={props => <List.Icon {...props} icon="phone" />}
        onPress={()=>{ToastAndroid.show("Panggilan Masuk Pak Edwin", ToastAndroid.SHORT)}} 
      />

    <List.Item
        title="Bang Ringgas"
        description="Hari ini 21.43"
        left={props => 
          
          <Avatar.Image size={60} source={User} />
          
        }
        right={props => <List.Icon {...props} icon="video" />}
        onPress={()=>{ToastAndroid.show("Panggialn Video Bang Ringgas", ToastAndroid.SHORT)}} 
      />
    </View>
  );
}

export default Calls;