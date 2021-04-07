import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {
    TextInput,
    Text,
    Button,
    Appbar
    
} from 'react-native-paper'

const HomeContentScreen = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.root}>
            <Text>Content...</Text>
            <Button mode="contained" onPress={()=>navigation.navigate("Detail")}>See Detail</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeContentScreen