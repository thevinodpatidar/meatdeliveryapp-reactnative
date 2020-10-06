import React from 'react'
import { View, Text,StyleSheet, ScrollView,Image, ImageBackground } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const RecipeContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.recipeHeadingContainer}>
                <Image source={{uri : "https://picsum.photos/695/600"}} style={styles.img} />
                <View style={styles.detail}>
                    <Text >Popular Recipes</Text>
                    <Text >7 Recipes</Text>
            </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.recipesContainer}>
                <View style={styles.recipeContainer}>
                    <ImageBackground source={{uri : "https://picsum.photos/645/400"}} style={styles.recipeImage}>
                    <View style={styles.videoContainer}>
                        <View style={styles.videoControls} >
                            <Text style={{color : "#fff", fontWeight : "bold", fontSize :20}}>Chicken Salad</Text>
                            <Text style={{color : "#fff"}} >05:30</Text>
                        </View>
                        <Icon name="play-circle" size={30} color="#f66f69" />
                    </View>
                    </ImageBackground>
                </View>
                <View style={styles.recipeContainer}>
                    <ImageBackground source={{uri : "https://picsum.photos/657/400"}} style={styles.recipeImage}>
                    <View style={styles.videoContainer}>
                        <View style={styles.videoControls} >
                            <Text style={{color : "#fff", fontWeight : "bold",fontSize :20}}>Chicken Salad</Text>
                            <Text style={{color : "#fff"}} >05:30</Text>
                        </View>
                        <Icon name="play-circle" size={30} color="#f66f69" />
                    </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        // flex :2
    },
    recipeHeadingContainer :{
        flexDirection : "row",
        alignItems : "center",
        padding : 8,
        marginLeft : 20,
        marginTop : 20,
        borderRadius : 7,
        // width : 200
    },
    recipesContainer:{
        flexDirection : "row"
    },
    recipeContainer:{

    },
    img :{
        // flex : 1,
        width : 40,
        height : 40,
        borderRadius : 7,
    },
    detail :{
        paddingLeft : 10,
    },
    recipeImage :{
        // flex :1,
        width : 290,
        height : 150,
        padding :20,
        margin : 20,
        marginRight : 5,
        justifyContent : "flex-end",
        borderRadius : 20
    },
    videoContainer :{
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-end"
    },
    videoControls :{

    }
})
export default RecipeContainer
