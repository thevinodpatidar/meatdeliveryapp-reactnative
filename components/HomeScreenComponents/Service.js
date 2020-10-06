import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Service = () => {
    return (
        <>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            <View style={styles.servicesContainer}>
                <Image source={{uri : "https://picsum.photos/625/600"}} style={styles.img} />
                <View style={styles.detail}>
                    <Text >Packaging</Text>
                    <Text >Tamper Proof</Text>
                </View>
            </View>
            <View style={styles.servicesContainer}>
                <Image source={{uri : "https://picsum.photos/663/600"}} style={styles.img} />
                <View style={styles.detail}>
                    <Text >Delivery</Text>
                    <Text >Express 2 Hours</Text>
                </View>
            </View>
            <View style={styles.servicesContainer}>
                <Image source={{uri : "https://picsum.photos/628/600"}} style={styles.img} />
                <View style={styles.detail}>
                    <Text style={styles.service} >Fresh</Text>
                    <Text style={styles.serviceDetail}>100% fresh</Text>
                </View>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container :{
        // height : 200
    },
    servicesContainer :{
        flexDirection : "row",
        alignItems : "center",
        padding : 8,
        marginRight : 10,
        borderRadius : 7,
        borderWidth : 1,
        borderColor : "grey"
    },
    img :{
        flex : 1,
        width : 40,
        height : 40,
        borderRadius : 7,
    },
    detail :{
        paddingLeft : 10,
    },
    service : {

    },
    serviceDetail : {

    }
})

export default Service;
