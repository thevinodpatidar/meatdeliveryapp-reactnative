import React from 'react';
import { View, Text ,Button, StyleSheet } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../components/HomeScreenComponents/SearchBar';

function RecipeScreen({ navigation,route }) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize : 24,color : "#fff"}}>Recipes</Text>
          </View> 
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
        </ScrollView>
      );
  }

  const styles = StyleSheet.create({
    container:{
      flex : 1
    },
    header:{
      padding : 10,
      backgroundColor : "tomato",
      justifyContent : "center"
    },
    searchBar:{
      padding : 10,
      paddingTop  : 0
    }
  })
export default RecipeScreen;