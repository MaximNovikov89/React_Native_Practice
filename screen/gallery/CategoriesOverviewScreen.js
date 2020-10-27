import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import CategoryGridTile from '../../components/CategoryGridTile';



export default function CategoriesOverviewScreen(props) {

    const categories = useSelector((state) => state.categoriesReducer.categoriesList);

    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'Galleries',
                    params: {
                        galleryId: itemData.item.galleryId,
                        categoryTitle: itemData.item.title
                    }
                })
            }} />;
    }

    return (
        <View style={styles.screen}>

            <FlatList numColumns={2} data={categories} renderItem={renderGridItem} />

        </View>
    )
}
CategoriesOverviewScreen.navigationOptions = {
    headerTitle: 'Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },

});
