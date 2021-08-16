import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const LogIn = () => {
  const [username, onChangeUsername] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.usernameInput}
          value={username}
          onChangeText={onChangeUsername}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.third,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 20,
  },
  loginText: {
    fontSize: 25,
    color: colors.first,
  },
  screen: {
    backgroundColor: colors.second,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  usernameInput: {
    width: "100%",
    height: 70,
    backgroundColor: colors.first,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 20,
    fontSize: 30,
  },
});
