import React from 'react';
import { View, Text , StyleSheet} from "react-native"

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Services from "../components/HomeScreenComponents/Service";
import ProductList from  "../components/HomeScreenComponents/ProductList";
import RecipeContainer from '../components/HomeScreenComponents/RecipeContainer';

function DetailsScreen(props) {
    return (
     <View style={styles.container}>
        <View style={styles.headerContainer}>
         <TouchableOpacity activeOpacity={.8} onPress={()=> props.navigation.goBack()}>
          <View style={styles.header}>
          <Icon style={styles.icon} name="chevron-left" size={30} />
          <Text style={styles.headerText}>Steaks</Text>
          </View>
         </TouchableOpacity>
        </View>
        <View style={styles.secondaryContainer}>
          <View style={styles.serviceContainer}>
            <Services />
          </View>
          <View style={styles.productContainer}>
            <ProductList />
          </View>
          <View style={styles.recipeContainer}>
              <RecipeContainer />
          </View>
        </View>
     </View>
    );
  }
  
const styles = StyleSheet.create({
    container : {
      flex:1,
      backgroundColor : "#ffd765",
    },
    headerContainer :{
      height : 80
    },
    header :{
      paddingTop : 20,
      paddingLeft : 10,
      flexDirection : "row",
      alignItems : "center"
    },
    icon:{

    },
    headerText :{
      fontSize : 20,
      fontWeight : "bold",
      paddingLeft : 10
    },
    secondaryContainer : {
      backgroundColor : "#fff",
      borderTopStartRadius : 20,
      borderTopEndRadius : 20,
      flex :1
    },
    serviceContainer : {
      margin : 20,
      marginBottom : 0,
      marginRight :0,
      height : 50
    },
    productContainer :{
      margin : 15,
      flex :2
    },
    recipeContainer :{
      borderTopStartRadius : 20,
      borderTopEndRadius : 20,
      backgroundColor : "#fff7f4",
      flex :3
    }
})
export default DetailsScreen;