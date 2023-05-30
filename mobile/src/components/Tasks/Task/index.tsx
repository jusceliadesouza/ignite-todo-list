import { View, Text, Image } from "react-native";

import trash from '../../../assets/trash.png'

import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </Text>

        <Image source={trash} />
      </View>
    </View>
  )
}