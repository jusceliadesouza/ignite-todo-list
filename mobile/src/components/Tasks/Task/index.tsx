import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";

import { styles } from "./styles";

type Props = {
  name: string,
  onRemove: () => void
}

export function Task({name, onRemove}: Props) {
  const [isChecked, setChecked] = useState(false)

  function handleCheckboxChecked() {
    if(!isChecked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox 
          style={
            isChecked 
              ? styles.checked 
              : styles.checkbox
          }
          value={isChecked}
          onValueChange={handleCheckboxChecked}
          color={isChecked ? '#5E60CE':  "#4EA8DE"} 
        />
        
        <Text style={styles.name}>
          {name}
        </Text>

        <TouchableOpacity
          onPress={onRemove}
        >
          <MaterialCommunityIcons   
            name="trash-can-outline" 
            color="#808080" 
            size={20} 
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}