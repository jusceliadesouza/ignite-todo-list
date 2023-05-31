import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    width: 346,
    height: 208,
    borderTopColor: theme.colors.gray[400],
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.gray[300],
  },
  title: {
    color: theme.colors.gray[300],
    fontWeight: "bold",
    marginTop: 16,
  },
})