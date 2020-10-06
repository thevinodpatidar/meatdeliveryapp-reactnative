import React from 'react'
import { View, Text,StyleSheet, ScrollView,FlatList,Image } from 'react-native'

import Category from "./Category";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const CategoryList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginTop : 20, marginLeft : 10,fontSize :18}} >Explore by Category</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            <TouchableOpacity activeOpacity={.9} onPress={()=> navigation.navigate("Details",{categoryName: "Steak"})}>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/608/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Steak</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/601/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/602/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/603/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/604/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/605/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/606/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Image source={{uri : "https://picsum.photos/607/600"}} style={styles.categoryImage} ></Image>
                <Text style={styles.categoryName}>Shrimp</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        marginLeft :10
    },
    categoriesContainer :{
        // flexDirection : "row",
        flex  :1,
        marginTop : 10,
    },
    categoryContainer:{
        padding : 8,

    },
    categoryImage:{
        width : 80,
        height :80,
        borderRadius : 10,
    },
    categoryName :{
        fontWeight : "500"
    }
})

export default CategoryList
