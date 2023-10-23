import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 16,
    marginBottom: 16

  },

  name: {
    color: "#FFF",
    flex: 1
  },

  buttonText: {
    color: "yellow",
    fontSize: 24,
  },

  button: {
    height: 56,
    width: 56,
    borderRadius: 6,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});
