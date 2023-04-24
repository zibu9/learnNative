import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    onAddTask: (task: string) => void;
}

const TaskForm = ({onAddTask}: Props) => {
  const [title, setTitle] = useState<string>('');
  const onChangeText = (val:any) =>{
    setTitle(val);
  }
  const onAddNewTask = () => {
    if (title==="") return
    onAddTask(title);
    setTitle('');
  }
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={title}
            placeholder='nouvelle tache'
        />
        <Button
            onPress={onAddNewTask}
            title="Ajouter"
            color="blue"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    input:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        width:"70%",
        height:40,
        marginTop:10,
    },
});

export default TaskForm