/** @format */

import React from "react";
import tw from "tailwind-rn";

import Home from "./Screens/Home/Home";
import about from "./Screens/AboutDev/About";
import Main from "./Screens/Interface/Main";
import { ToastContainer } from "react-toastify";
import { NavigationContainer } from "@react-navigation/native-";
import { createNativeStackNavigator } from "@react-navigation/native/stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator InitialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
