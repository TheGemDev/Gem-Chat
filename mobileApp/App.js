import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { useCachedResources } from "react-native-rapi-ui";
import Home from "./src/screens/Home";

export default function App(props) {
  const isLoadingComplete = useCachedResources([
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ]);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <Home />
        <StatusBar style="auto" translucent />

        <AuthProvider></AuthProvider>
      </SafeAreaProvider>
    );
  }
}
