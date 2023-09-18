import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    createTaskContainer: {
        backgroundColor: '#ffffff', 
        flexDirection: 'row', 
        borderRadius: 50, 
        marginTop: 4
      },
      createTaskButton: {
        backgroundColor: '#4288cb',
        width: 60,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      createTaskInput:{
        backgroundColor: '#ffffff',
        padding: 10,
        color: '#000000',
        flex: 1,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50
      }
});