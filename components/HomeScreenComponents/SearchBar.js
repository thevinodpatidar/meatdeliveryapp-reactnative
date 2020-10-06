import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchIcon  from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <SearchIcon style={styles.icon} name="search" size={20} />
            <Text style={styles.text} >What are you carving for ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : "#E0E0E0",
        flexDirection : "row",
        borderRadius  :10,
        marginTop : 8,
        padding : 10
    },
    icon:{
        paddingLeft : 10,
        opacity : .5
    },
    text :{
        paddingLeft : 20,
        fontSize : 16,
        opacity : .5
    }
})
export default SearchBar;
