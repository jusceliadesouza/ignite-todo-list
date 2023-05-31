import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    width: 345
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoText: {
    flexDirection: 'row',
  },
  infoCreatedText: {
    color: theme.colors.brand.blue,
    fontWeight: 'bold',
  },
  infoDoneText: {
    color: theme.colors.brand.purple,
    fontWeight: 'bold',
  },
  counter: {
    backgroundColor: theme.colors.gray[400],
    borderRadius: 999,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
  counterText: {
    fontSize: 12,
    color: theme.colors.gray[200],
  }, 
})