import React from "react";
import { Button, StyleSheet } from "react-native";
import { View } from "react-native";
import colors from "../config/colors";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.background}>
      <Button
        title="Back to Log In"
        onPress={() => navigation.navigate("Welcome")}
      />
      <View>
        <View>
          <Button
            title="pooppoooo"
            onPress={() => navigation.navigate("Welcome")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.second,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
