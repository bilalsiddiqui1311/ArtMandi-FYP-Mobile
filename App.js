import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./screens/StackNavigator";
import { Provider } from "react-redux";
import stores from "./screens/redux/store/store";

const { store } = stores();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    </Provider>
  );
};
export default App;