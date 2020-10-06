import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import PlusIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Recommended = () => {
    return (
        <View style={styles.container}>
            <Text style={{marginTop : 10, marginLeft : 10,fontSize :18}}>Recommended</Text>
            <ScrollView >
                <View style={styles.recommendedContainer}>
                    <Image source={{uri : "https://picsum.photos/343/500"}} style={styles.img}></Image>
                    <View style={styles.detailContainer} >
                        <Text style={styles.name}>Salmon Fish Steaks</Text>
                        <Text style={styles.quantity}>Net wt. 500gms</Text>
                        <Text style={styles.price} >$ 150</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <PlusIcon name="plus" size={20} color="#fff"/>
                    </View>
                </View>
                <View style={styles.recommendedContainer}>
                    <Image source={{uri : "https://picsum.photos/743/500"}} style={styles.img}></Image>
                    <View style={styles.detailContainer} >
                        <Text style={styles.name}>Salmon Fish Steaks</Text>
                        <Text style={styles.quantity}>Net wt. 500gms</Text>
                        <Text style={styles.price} >$ 150</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <PlusIcon name="plus" size={20} color="#fff"/>
                    </View>
                </View>
                <View style={styles.recommendedContainer}>
                    <Image source={{uri : "https://picsum.photos/443/500"}} style={styles.img}></Image>
                    <View style={styles.detailContainer} >
                        <Text style={styles.name}>Salmon Fish Steaks</Text>
                        <Text style={styles.quantity}>Net wt. 500gms</Text>
                        <Text style={styles.price} >$ 150</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <PlusIcon name="plus" size={20} color="#fff"/>
                    </View>
                </View>
                <View style={styles.recommendedContainer}>
                    <Image source={{uri : "https://picsum.photos/143/500"}} style={styles.img}></Image>
                    <View style={styles.detailContainer} >
                        <Text style={styles.name}>Salmon Fish Steaks</Text>
                        <Text style={styles.quantity}>Net wt. 500gms</Text>
                        <Text style={styles.price} >$ 150</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <PlusIcon name="plus" size={20} color="#fff"/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        marginTop :10,
        // paddingLeft : 20, 
        paddingRight : 20,
        paddingBottom : 10
    },
    img:{
        flex :1,
        width :90,
        height :90,
        borderRadius : 10
    },
    recommendedContainer :{
        paddingTop : 15,
        paddingLeft :10 ,
        flexDirection : "row",
        // alignItems : "center",
        // justifyContent : "space-between"
    },
    detailContainer :{
        flex : 2,
        paddingLeft : 20,
        // al
    },
    name :{
        fontSize : 18,
        fontWeight : "800"
    },
    quantity :{
        opacity : .6
    },
    price :{
        fontSize : 18,
        fontWeight : "900",
        paddingTop : 20
    },
    iconContainer :{
        alignSelf : "center",
        backgroundColor : "#f58873",
        borderRadius : 6,
        padding : 2
    }
})

export default Recommended
