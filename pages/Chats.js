import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar, Badge } from 'react-native-paper';
import axios from 'axios';

import Wes from '../asset/wes.jpg';
import Cat from '../asset/cat.jpg';
import Kucing from '../asset/kucing.jpg';
import User from '../asset/user.jpg';

// type Props = {};

const Chats = () => {
  return (

    <View>
      <List.Item
        title="Pak Edwin"
        description="Mawan Tolong Pisahkan Pdf Ini yaa."
        left={props => 
          
          <Avatar.Image size={60} source={Wes} />
          
        }
        right={props => 
          <Text>10.00 AM</Text> 
        }
        onPress={()=>{ToastAndroid.show("Mawan Tolong Pisahkan Pdf Ini yaa.", ToastAndroid.SHORT)}} 
      />

      <List.Item
        title="Agung Prastio"
        description="Mana Jek, Gk belik makan kita"
        left={props => 
          <Avatar.Image size={60} source={Cat} />
        }
        right={props => 
          <View>
            <Text 
              style={{ 
                fontSize: 13,
                marginBottom: 8
              }}
            >20.10 PM</Text>
            <Badge
                style={{ 
                fontSize: 11,
                backgroundColor:'#7fbb00',
                color:'white',
                
              }}
            >2</Badge>
          </View>
        }
        onPress={()=>{ToastAndroid.show("Mana Jek, Gk belik makan kita", ToastAndroid.SHORT)}}
      />

    <List.Item
        title="Kucing"
        description="Hai Mawan,Saya Lapar.."
        left={props => 
          <Avatar.Image size={60} source={Kucing} />
        }
        right={props => 
          <View>
            <Text 
              style={{ 
                fontSize: 13,
                marginBottom: 8
              }}
            >20.10 PM</Text>
            <Badge
                style={{ 
                fontSize: 11,
                backgroundColor:'#7fbb00',
                color:'white',
                
              }}
            >1</Badge>
          </View>
        }
        onPress={()=>{ToastAndroid.show("Hai Mawan,Saya Lapar..", ToastAndroid.SHORT)}}
      />

    <List.Item
        title="Bang Ringgas"
        description="Wan, Uda siap tugas mu?"
        left={props => 
          
          <Avatar.Image size={60} source={User} />
          
        }
        right={props => 
          <Text>Kemarin</Text> 
        }
        onPress={()=>{ToastAndroid.show("Wan, Uda Siap tugas mu?", ToastAndroid.SHORT)}} 
      />

    </View>
  );
}

export default Chats;