import { Image, View, Text } from "react-native";

import clipboard from '../../assets/clipboard.png'

import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={clipboard} />
          
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
          
        <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}