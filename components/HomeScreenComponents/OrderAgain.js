import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const OrderAgain = () => {
    return (
        <View style={styles.container}>
            <Text style={{marginTop : 10, marginLeft : 10,fontSize :18}}>Order Again</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ordersContainer}>
                <View style={styles.orderContainer}>
                    <Image source={{uri : "https://picsum.photos/501/500" }} style={styles.image}/>
                    <View style={styles.detailContainer} >
                        <Text style={styles.orderName}>Chicken Drumstick</Text>
                        <Text style={styles.orderQuantity}>Pieces 5 - 7</Text>
                        <Text style={styles.orderDate}>Ordered 2 days ago</Text>
                    </View>
                </View>
                <View style={styles.orderContainer}>
                    <Image source={{uri : "https://picsum.photos/502/500" }} style={styles.image}/>
                    <View style={styles.detailContainer} >
                        <Text style={styles.orderName}>Chicken Drumstick</Text>
                        <Text style={styles.orderQuantity}>Pieces 5 - 7</Text>
                        <Text style={styles.orderDate}>Ordered 2 days ago</Text>
                    </View>
                </View>
                <View style={styles.orderContainer}>
                    <Image source={{uri : "https://picsum.photos/503/500" }} style={styles.image}/>
                    <View style={styles.detailContainer} >
                        <Text style={styles.orderName}>Chicken Drumstick</Text>
                        <Text style={styles.orderQuantity}>Pieces 5 - 7</Text>
                        <Text style={styles.orderDate}>Ordered 2 days ago</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        marginTop :10,
        paddingLeft : 10, 
        // paddingRight : 20
    },
    ordersContainer:{
        marginTop : 10,
        marginLeft : 10,
    },
    orderContainer :{
        flexDirection : "row",
        height : 80,
        // backgroundColor : ""
        marginRight : 30
    },
    image:{
        width : 80,
        height :80,
        borderRadius : 10
    },
    detailContainer:{
        paddingTop : 10,
        justifyContent : "space-around",
        paddingLeft : 20,
    },
    orderName :{
        fontSize : 16,
        fontWeight : "800"
    },
    orderQuantity :{
        paddingTop : 4
    },
    orderDate :{
        paddingTop : 20,
        paddingBottom : 7,
        opacity : .6
    }
})

export default OrderAgain
