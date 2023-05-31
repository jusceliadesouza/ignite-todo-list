import { View, Text, FlatList } from "react-native"

import { Empty } from "../Empty"
import { Task } from "./Task"

import { styles } from "./styles"

type Props = {
  tasks: string[]
  onRemove: (name: string) => void
}

export function Tasks({ tasks, onRemove }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.infoText}>
          <Text style={styles.infoCreatedText}>
            Criadas{"  "}
            
          </Text>
          
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>


        <View style={styles.infoText}>
          <Text style={styles.infoDoneText}>
            Concluídas{"  "}
          </Text>

          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task 
            key={item}
            name={item}
            onRemove={() => onRemove(item)} />
          )
        }

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Empty />
        )}
      />
    </View>  
  )
}