import * as React from 'react';
import {useState} from 'react';
import {Button, Dimensions, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Text, View} from '../components/Themed';

export type Task = {
  title: string
  completed: boolean
}

export default function TodoListScreen() {
  return (
    <View style={styles.container}>
      <Todo/>
    </View>
  );
}

function Task(props: { task: Task, index: number, onCompleted: (index: number) => void }) {
  return (
    <View style={styles.todoContainer}>
      <Text style={{textDecorationLine: props.task.completed ? "line-through" : "none", fontSize: 16, color: '#000'}}>💡{props.task.title}</Text>
      <TouchableOpacity onPress={() => (props.onCompleted(props.index))} style={styles.todoButton}> 
        <Text>{props.task.completed ? "Undone" : "Done"}</Text>
      </TouchableOpacity> 
    </View>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);

  const addTask = (title: string) => {
    const newTasks = [...tasks, {title, completed: false}];
    setTasks(newTasks);
  };

  const completeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <View>
      <ScrollView style={styles.listContainer}>
        {tasks.map((task, index) => (
          <Task
            onCompleted={completeTask}
            task={task}
            index={index}
            key={index}
          />
        ))}
      </ScrollView>
      <View>
        <CreateTask addTask={addTask}/>
      </View>
    </View>
  );
}

function CreateTask(props: { addTask: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    props.addTask(value);
    setValue("");
  }

  return (
    <View>
      <TextInput
        style={{backgroundColor: '#ffffff', padding: 10, color: '#000000'}}
        value={value}
        placeholder="Add a new task"
        onChangeText={e => setValue(e)}
      />
      <Button onPress={handleSubmit} title={"Add"}/>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.9,
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  listContainer: {
    height: '90%'
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#c4bebd',
    padding: 8,
    borderRadius: 50,
    alignItems: 'center'
  },
  todoButton: {
    borderRadius: 50,
    backgroundColor: '#4288cb',
    padding: 8,
    width: 70,
    alignItems: 'center'
  }
});