import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems:'center'
  },
  header: {
    width: "100%",
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[700],
  },
  form: {
    flexDirection: 'row',
    padding: 24,
    marginTop: -55,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray[700],
    backgroundColor: theme.colors.gray[500],
    borderRadius: 6,
    marginRight: 6,
    padding: 16,
    color: theme.colors.gray[100],
  },
  inputFocus: {
    borderColor: theme.colors.brand.purple,
    underlineColor: 'transparent',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.brand.blueDark,
  },
  
  taskContainer: {
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
  },
  counterText: {
    fontSize: 12,
    color: theme.colors.gray[200],
  }, 
})