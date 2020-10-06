import React from 'react'
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native'

import PlusIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import { ScrollView } from 'react-native-gesture-handler';

const ProductList = () => {
    return (
        <View style={styles.container}>
            <Text style={{marginTop : 5, marginLeft : 0,fontSize :18}}>16 types of Steaks</Text>
            <ScrollView>
                <View style={styles.productContainer}>
                    <Image source={{uri : "https://picsum.photos/443/200"}} style={styles.img}></Image>
                    <View style={styles.detailContainer} >
                        <Text style={styles.name}>Salmon Fish Steaks</Text>
                        <Text style={styles.quantity}>Net wt. 500gms</Text>
                        <Text style={styles.price} >$ 150</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <PlusIcon name="plus" size={20} color="#fff"/>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Image source={{uri : "https://picsum.photos/543/200"}} style={styles.img}></Image>
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
    },
    img:{
        flex :1,
        // width :40,
        // height :40,
        borderRadius : 10
    },
    productContainer :{
        paddingTop : 15,
        // paddingLeft :10 ,
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
        paddingTop : 10
    },
    iconContainer :{
        alignSelf : "center",
        backgroundColor : "#f58873",
        borderRadius : 6,
        padding : 2
    }
})
export default ProductList;
