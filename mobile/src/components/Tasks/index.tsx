import { useState } from "react"
import { View, Text, FlatList } from "react-native"

import Empty from "../Empty"

import { styles } from "./styles"
import { Task } from "./Task"

export function Tasks() {
  const [tasks, setTasks] = useState()

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoCreated}>
          Criadas{"  "}

          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </Text>

        <Text style={styles.infoDone}>
          Concluídas{" "}
          
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </Text>
      </View>

      <Task />

      <View>

      </View>
    </View>  
  )
}