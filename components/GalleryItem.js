import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

export default function GalleryItem(props) {
    return (
        <View style={styles.galleryItem}>

            <TouchableOpacity onPress={props.onSelectGallery}>
                <View>

                    <View style={{ ...styles.galleryRow, ...styles.galleryDetails }}>
                        <Text>{props.title}</Text>
                        <Text>{props.numOfPictures} Pictures</Text>
                    </View>

                    <View style={{ ...styles.galleryRow, ...styles.galleryHeader }}>
                        <ImageBackground source={{ uri: props.backgroundImage }} style={styles.backgroundImage} />
                    </View>



                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    galleryItem: {
        marginTop: 15,
        height: 200,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: Colors.primaryYellow
    },
    galleryRow: {
        flexDirection: 'row',
    },
    galleryHeader: {
        height: '90%'
    },
    galleryDetails: {
        // paddingHorizontal: 3,
        justifyContent: 'space-between'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',

    }
})
