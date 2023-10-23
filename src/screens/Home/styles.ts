import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 60,
    backgroundColor: "#202020",
    borderRadius: 4,
    paddingHorizontal: 16,
    color: "#FFF",
    fontSize: 16,
  },
  buttonText: {
    color: "yellow",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 6,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42
  },
  emptyListMessage: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center"
  }
});
