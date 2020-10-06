import React from 'react';
import { View, Text ,Button,StyleSheet, Image } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/EvilIcons';

import SearchBar  from "../components/HomeScreenComponents/SearchBar";
import Banner  from "../components/HomeScreenComponents/Banner";
import CategoryList from '../components/HomeScreenComponents/CategoryList';
import OrderAgain from "../components/HomeScreenComponents/OrderAgain";
import Recommended from '../components/HomeScreenComponents/Recommended';

function HomeScreen({ navigation,route }) {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.locaionAndProfileContainer}>
                <View style={styles.locationContainer}>
                  <Icon style={styles.locationIcon} name="location" size={20}></Icon>
                  <Text style={styles.locationText}>New York City</Text>
                </View>
                <View style={styles.profileContainer}>
                  <Image source={{uri : "https://randomuser.me/api/portraits/men/1.jpg"}} style={styles.img} />
                </View>
            </View>
            <View style={{ paddingLeft : 20, paddingRight : 20 }}>
            <SearchBar />
            <Banner />
            </View>
            <CategoryList navigation={navigation} />
            <OrderAgain />
            <Recommended />
        </ScrollView>
      );
  }
  
const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    // alignItems: 'center', 
    // justifyContent: 'center',
    // paddingLeft : 20,
    // paddingRight : 20 
  },
  locaionAndProfileContainer:{
    margin : 10,
    marginLeft : 0,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    paddingLeft : 20,
    paddingRight : 20 
  },
  locationContainer:{
    flexDirection: "row",
    backgroundColor : "tomato",
    alignItems : "center",
    justifyContent : "center",
    padding:10,
    paddingLeft :0,
    color : "#ffffff",
    width : 150,
    borderTopStartRadius :10,
    borderBottomStartRadius :10,
    borderBottomEndRadius :10
  },
  locationIcon:{
    color :"#fff"
  },
  locationText : {
    color : "#fff",
    fontSize : 14
  },
  profileContainer:{
    borderWidth : 3,
    justifyContent  : "center",
    alignItems : "center",
    borderColor : "white",
    borderRadius : 40
  },
  img : {
    padding : 10,
    width :30,
    height : 30,
    borderRadius : 40
  }
})
export default HomeScreen;