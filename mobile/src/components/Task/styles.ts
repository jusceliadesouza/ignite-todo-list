import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    height: 64,
    marginTop: 20,
    backgroundColor: theme.colors.gray[500],
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center'
  },
  checkbox: {
    borderRadius: 999,
  },
  checked: {
    borderRadius: 999,
    borderWidth: 5,
  },
  content: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  name: {
    flex: 1,
    marginLeft: 16,
    color: theme.colors.gray[100]
  },
})