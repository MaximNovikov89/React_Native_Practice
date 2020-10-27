import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import GalleryNavigator from "./navigation/GalleryNavigator";
import CategoriesReducer from './store/reducers/categories';
import GalleriesReducer from './store/reducers/galleries';
import { enableScreens } from 'react-native-screens';

enableScreens();

const rootReducer = combineReducers({
  categoriesReducer: CategoriesReducer,
  galleriesReducer: GalleriesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "font-primary": require("./assets/fonts/JosefinSans-VariableFont_wght.ttf"),
    "font-secondary": require("./assets/fonts/SignikaNegative-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setIsLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setIsLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <GalleryNavigator />
    </Provider>
  );
}
