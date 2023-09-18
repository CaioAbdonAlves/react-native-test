import { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTaskComponent } from "./props";

export function CreateTask(props: CreateTaskComponent) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    props.addTask(value);
    setValue("");
  }

  return (
    <View style={styles.createTaskContainer}>
      <TextInput
        style={styles.createTaskInput}
        value={value}
        placeholder="Add a new task"
        onChangeText={e => setValue(e)}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.createTaskButton}>
        <Text><Ionicons name='md-add-circle' size={32} color='#fff' /></Text>
      </TouchableOpacity>
    </View>
  );
}