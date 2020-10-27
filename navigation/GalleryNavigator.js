import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesOverviewScreen from '../screen/gallery/CategoriesOverviewScreen';
import CategoryGalleryScreen from '../screen/gallery/CategoryGalleryScreen';
import GalleryImagesSceen from '../screen/gallery/GalleryImagesSceen';
import Colors from '../constants/Colors';


const MainNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesOverviewScreen,
            //headerTitle
        },
        Galleries: {
            screen: CategoryGalleryScreen
        },
        Images: {
            screen: GalleryImagesSceen
        }
    },
    {
        //mode: modal
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.accentBlue,

            },
            headerTintColor: 'white'
        }
    }

);

export default createAppContainer(MainNavigator);