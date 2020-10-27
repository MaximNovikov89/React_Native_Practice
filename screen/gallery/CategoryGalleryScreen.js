import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import GalleryItem from '../../components/GalleryItem';


export default function CategoryGalleryScreen(props) {

    const selectedGalleryId = props.navigation.getParam('galleryId');
    const allGalleries = useSelector(state => state.galleriesReducer.galleries);

    const galleries = allGalleries.find(gallery => gallery.id === selectedGalleryId).galleries;


    const renderGalleryItem = (itemData) => {
        return (
            <GalleryItem
                title={itemData.item.title}
                backgroundImage={itemData.item.imageUrl}
                numOfPictures={itemData.item.numberOfImages}
                onSelectGallery={() => {
                }} />
        )
    }

    return (

        <View style={styles.screen}>
            <FlatList data={galleries} renderItem={renderGalleryItem} style={{ width: '100%' }} />
        </View>
    )

}

CategoryGalleryScreen.navigationOptions = (navigationData) => {
    const selectedCategoryTitle = navigationData.navigation.getParam('categoryTitle');


    return {
        headerTitle: selectedCategoryTitle,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})