import React from 'react';
import { View, Text ,Button } from "react-native"

function FavoriteScreen({ navigation,route }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 10 }}>FavoriteScreen</Text>
        </View>
      );
  }
  
export default FavoriteScreen;