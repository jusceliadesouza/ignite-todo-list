import { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native"
import { Feather } from '@expo/vector-icons';

import { Tasks } from "../../components/Tasks"

import logo from '../../assets/logo.png'

import { styles } from "./styles"
import { theme } from "../../theme";

export default function Home() {
  

  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState("")
  
  function handleTaskAdd() {
    if(tasks.includes(taskName)) {
      return Alert.alert("Ops!", "Você já adicionou essa tarefa. Insira um nome diferente para a nova tarefa.")
    }

    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskRemove(name: string) {
    Alert.alert('Remover', `Você tem certeza que deseja remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
        
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor= {theme.colors.gray[300]}
          onChangeText={setTaskName}
          value={taskName}
          autoFocus
        />

      <TouchableOpacity
        style={styles.button}
        onPress={handleTaskAdd}
      >
        <Feather name="plus-circle" size={20} color={theme.colors.gray[200]} />
      </TouchableOpacity>
      </View>

      <Tasks tasks={tasks} onRemove={() => handleTaskRemove(taskName)}  />
    </View>
  )
}