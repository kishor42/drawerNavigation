import React,{Component} from 'react';
import{View, Text, StyleSheet, FlatList, Image, TouchableNativeFeedback} from 'react-native';
import {useTheme} from '@react-navigation/native';
import data from '../db';

const Advanture = ({navigation})  => {
  //const theme = useTheme();
      
    
    state ={
        data: data   
              }

        return (
            <View style={styles.container}> 
                   <FlatList  style={{width:'100%'}}
                              data={this.state.data} 
                              keyExtractor={(item,index) => index.toString()} 
                                renderItem= {({item}) => {
                              return(
                              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('advdetails', {...item})} >     
     <View> 
       <View style={{marginVertical:24, marginHorizontal: 15, borderRadius:15, backgroundColor:'#ced6eo',elevation:15}}>
           <View style={{padding: 15, backgroundColor:'#7f75f2', borderTopLeftRadius:15, borderTopRightRadius:15}}>
                  <Text style={{ fontSize:20, fontWeight: 'bold'}}>{item.eventName}</Text>
                            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'baseline'}}>
                                <View style={{ alignItems:'baseline' }}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{item.genre} </Text>
                                <Text style={{fontSize:15, fontWeight:'bold'}}>{item.location} </Text>
                               
                                 </View>
                          
                             </View>
             </View>
                  <View>
                      <Image 
                      source={{uri:item.image}}  style={{width: '100%', height:200, borderBottomLeftRadius:15, borderBottomRightRadius:15, flex:1, alignSelf:'stretch'}}
                       />
                  </View>    
         </View>    
  </View>
  </TouchableNativeFeedback>
                              )
                              } }
                              />
                              </View>
                         );
                            }
                        

export default Advanture;

const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#f1f2f6'
       
    }
 });