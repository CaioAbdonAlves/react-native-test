import * as React from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import { Todo } from './components/Todo';

export type TaskType = {
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

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.9,
    alignSelf: 'center'
  },
});