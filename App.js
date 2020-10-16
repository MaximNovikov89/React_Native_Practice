import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ShopNavigator from './navigation/ShopNavigator';


const rootReducer = combineReducers({

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "font-primary": require("./assets/fonts/JosefinSans-VariableFont_wght.tff"),
    "font-secondary": require("./assets/fonts/SignikaNegative-Regular.tff"),
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
      <ShopNavigator />
    </Provider>
  );
}
