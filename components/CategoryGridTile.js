import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>

            <TouchableCmp
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={styles.container}>
                    <Text style={styles.categorieTitle} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>

        </View>
        //props.imageUrl
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignContent: 'flex-end',
        backgroundColor: Colors.primaryYellow
    },
    categorieTitle: {
        fontFamily: "font-primary",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
})

export default CategoryGridTile;