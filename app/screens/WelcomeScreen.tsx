import React from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import SignIn from "../Components/SignIn";
import colors from "../config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "../Components/LogIn";

export const WelcomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.first }} />
      <SafeAreaView style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.introText}>Today could be your day!</Text>
        </View>
        <View style={styles.bottom}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="LogIn" component={LogIn} />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.second,
  },

  bottom: {
    height: "50%",
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  logoContainer: {
    height: "50%",
    paddingTop: 80,
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.first,
  },
  introText: {
    fontSize: 30,
    color: colors.second,
  },
});
