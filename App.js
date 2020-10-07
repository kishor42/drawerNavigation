
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';



import home from './screen/home';
import destination from './screen/destination';
import profile from './screen/profile';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor: '#821fe0',
    
    },
    headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',  
    }
   }}>

     <HomeStack.Screen name="home" component={home} options={{
       headerLeft: () => (
         <Icon.Button name="ios-menu" size={25}
         backgroundColor='#821fe0' onPress={() =>{navigation.openDrawer()

         }
        }
        ></Icon.Button>
       )
     }}
     />
   </HomeStack.Navigator>
)


function App() {
  return (
    <NavigationContainer>


<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
       <Drawer.Screen name="Destination" component={destination} />
        <Drawer.Screen name="profile" component={profile} /> 
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;