import { TouchableOpacity } from "react-native";
import { View, Text } from "../../../components/Themed";
import { TaskComponent } from "./props";
import { styles } from './styles';

export function Task(props: TaskComponent) {
  return (
    <View style={styles.todoContainer}>
      <Text style={{ textDecorationLine: props.task.completed ? "line-through" : "none", fontSize: 16, color: '#000' }}>💡{props.task.title}</Text>
      <TouchableOpacity onPress={() => (props.onCompleted(props.index))} style={styles.todoButton}>
        <Text>{props.task.completed ? "Undone" : "Done"}</Text>
      </TouchableOpacity>
    </View>
  );
}

