import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import logo from '../../assets/logo.png'

import { styles } from "./styles"
import { Tasks } from "../../components/Tasks"

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
        
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#808080'
        />

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
        
      </TouchableOpacity>
      </View>

      <Tasks />

    </View>
  )
}