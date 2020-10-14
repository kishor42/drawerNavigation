
import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper';
import {useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const home = ({navigation}) => {
  const theme = useTheme();

  return (
      <ScrollView style={styles.container}>
      <View >
     
       
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#61605f" translucent = {true}/>
          <View style={styles.sliderContainer}>
          <Swiper autoplay horizontal={false}  height={200} activeDotColor='#821fe0'  >
         <View style={styles.slide}>
            <Image 
           source={require('../assets/boudhanath.jpg')}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
           source={require('../assets/fewa.jpg')}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
           source={require('../assets/lumbini.jpg')}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

         </Swiper>
         </View>
      
       <View style={[styles.categoryContainer , {marginTop:10}]}>

       <TouchableOpacity style={styles.categoryBtn}
        onPress={() =>
      navigation.navigate('nature')}
      >
   <View style={styles.categoryIcon}> 

         <MaterialCommunityIcons name='nature' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>Nature</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {navigation.navigate('Architecture')}}>
        <View style={styles.categoryIcon}>
       <Ionicons name='aperture-sharp' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>Architecture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('Advanture', {title: 'ADVANTURE'})}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name='hiking' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>Adventure</Text>
        </TouchableOpacity>
   </View>

  <View style={[styles.categoryContainer, {marginTop:10}]}>
       
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {navigation.navigate('religious')}}>
        <View style={styles.categoryIcon}>
        <Ionicons name='ios-restaurant' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>Religious</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {navigation.navigate('culture')}}>
        <View style={styles.categoryIcon}>
        <Ionicons name='ios-restaurant' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>culture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {navigation.navigate('trekking')}}>
        <View style={styles.categoryIcon}>
         <Ionicons name='ios-restaurant' size={35} color='#821fe0' />
        </View>
        <Text style={styles.categoryBtnTxt}>trekking</Text>
        </TouchableOpacity>
   </View>
 
        <View style={styles.cardsWrapper}>
        <Text  style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
     
          }}> Recommendation </Text>
       
       </View>
     
      </View>
     </ScrollView>
      
    );
  }
  
  export default home;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: /*'#fdeae7' */ '#FF6347' ,
    borderRadius: 50,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '40%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    
  
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
 
});