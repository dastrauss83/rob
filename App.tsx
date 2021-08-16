import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { HomeScreen } from "./app/screens/HomeScreen";
import firebase from "firebase/app";
import { useState } from "react";
import { UserContext } from "./app/UserContext";
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

firebase.initializeApp({
  apiKey: "AIzaSyCBwKkaFrsTaO8T0yXvqfrST5-eunuhXQk",
  authDomain: "rob-37b99.firebaseapp.com",
  projectId: "rob-37b99",
  storageBucket: "rob-37b99.appspot.com",
  messagingSenderId: "352820761381",
  appId: "1:352820761381:web:f5da869c2b7e4960d700cc",
});

const Stack = createStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState<any>();

  const logout = () => {
    firebase.auth().signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("currentUser");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        return;
      }
    };
    setCurrentUser(getUser());
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          {currentUser && (
            <>
              <View style={styles.logout}>
                <Button title="Log Out" onPress={logout} />
              </View>
              <View style={styles.logoView}>
                <Image
                  source={require("./app/assets/logo.png")}
                  style={styles.logo}
                />
              </View>
            </>
          )}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {!currentUser ? (
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
              </>
            )}
          </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logout: {
    position: "absolute",
    zIndex: 100,
    top: 35,
    left: 5,
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoView: {
    position: "absolute",
    zIndex: 100,
    top: 35,
    right: 8,
  },
});
