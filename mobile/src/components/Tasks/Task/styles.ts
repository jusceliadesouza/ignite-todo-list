import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    height: 64,
    marginTop: 20,
    backgroundColor: '#262626',
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
    color: '#F2F2F2'
  },
})