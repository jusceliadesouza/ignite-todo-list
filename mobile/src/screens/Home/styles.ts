import { StyleSheet } from "react-native";

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
    backgroundColor: '#0D0D0D',
  },
  form: {
    flexDirection: 'row',
    padding: 24,
    marginTop: -50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    borderRadius: 6,
    marginRight: 6,
    padding: 16,
    
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 32
  },  
})