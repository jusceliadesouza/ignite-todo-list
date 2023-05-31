import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";

import { styles } from "./styles";
import { useState } from "react";

export function Task() {
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
        
        <Text style={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </Text>

        <TouchableOpacity>
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