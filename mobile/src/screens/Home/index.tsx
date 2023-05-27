import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import logo from '../../assets/logo.png'

import { styles } from "./styles"
import Empty  from "../../components/Empty"

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

      <View style={styles.taskInfoMenu}>
        <Text style={styles.taskInfoMenuTextCreated}>
          Criadas{" "}
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </Text>

        <Text style={styles.taskInfoMenuTextDone}>
          Concluídas{" "}
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </Text>
      </View>      

      <Empty />
    </View>
  )
}