import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: "#7D7D7D",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerTintColor: "#fff",
            title: "Kayit Ol",
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerLeft: null,
            headerStyle: {
              backgroundColor: "#7D7D7D",
            },
            headerTitleStyle: {
              color: "#fff",
              alignSelf: "center",
            },
            title: "Ürünlerin Fiyat Değişim Tablosu",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
