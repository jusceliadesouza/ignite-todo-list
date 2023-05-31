import { StyleSheet } from "react-native"

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
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  infoDoneText: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  counter: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
  counterText: {
    fontSize: 12,
    color: '#D9D9D9',
  }, 
})