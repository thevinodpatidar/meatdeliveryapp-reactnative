import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const Category = ({ categoryImage,categoryName}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri : categoryImage}} style={styles.categoryImage} ></Image>
            <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        // flexDirection : "row"
    },
    categoryImage:{
        width : 80,
        height :80
    },
    categoryName :{

    }
})
export default Category
