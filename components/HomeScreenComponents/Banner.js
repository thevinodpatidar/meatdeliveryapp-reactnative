import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const Banner = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri : "https://picsum.photos/771/600"}} style={styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop : 20,
    },
    img :{
        height : 150,
        borderRadius : 10
    }
})

export default Banner;
