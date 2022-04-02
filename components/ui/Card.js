import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../utility/colors";

function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

const styles = StyleSheet.create({
  Card: {
    // justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
  },
});

export default Card;
