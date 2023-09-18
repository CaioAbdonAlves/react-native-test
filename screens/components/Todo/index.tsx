import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View } from "../../../components/Themed";
import { defaultTasks } from "../../../constants/DefautTasks";
import { EnumStorageItems, useStorage } from '../../../hooks/useStorage';
import { TaskType } from "../../TodoListScreen";
import { Task } from "../Task";
import { styles } from './styles'
import { CreateTask } from "../CreateTask";

export function Todo() {
    const { setItemStorage, getItemStorage } = useStorage();
    const [tasks, setTasks] = useState<TaskType[]>([]);
  
    useEffect(() => {
      (async () => {
        const todoList = await getItemStorage<TaskType[]>(EnumStorageItems.todo);
  
        if(!todoList) {
          await setItemStorage(EnumStorageItems.todo, defaultTasks);
          setTasks(defaultTasks);
          return;
        }
  
        setTasks(todoList);
      })();
    }, []);
  
    const addTask = (title: string) => {
      const newTasks = [...tasks, {title, completed: false}];
      setTasks(newTasks);
      setItemStorage(EnumStorageItems.todo, newTasks);
    };
  
    const completeTask = (index: number) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
      setItemStorage(EnumStorageItems.todo, newTasks);
    };
  
    return (
      <View>
        <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
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