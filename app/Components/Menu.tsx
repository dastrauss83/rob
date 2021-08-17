import firebase from "firebase";
import React from "react";
import {
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { storeCurrentUser } from "../screens/WelcomeScreen";
import { useUserContext } from "../UserContext";

const Menu = () => {
  const { setCurrentUser } = useUserContext();

  const logout = () => {
    firebase.auth().signOut();
    setCurrentUser("noUser");
    storeCurrentUser("noUser");
  };
  return (
    <>
      <View style={styles.logout}>
        <Button title="Log Out" onPress={logout} />
      </View>
      <TouchableOpacity style={styles.logoView}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </TouchableOpacity>
    </>
  );
};

export default Menu;

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
