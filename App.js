import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { AppearanceProvider } from "react-native-appearance";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo1.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }

  /**
   * ### 시스템 디스플레이 라이트/다크 모드 감지 구독.
   * - Expected colorScheme : light or dark
   */
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    // 현재 시스템 디스플레이 모드 출력.
    // console.log(colorScheme);
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
