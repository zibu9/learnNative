import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type Props = {}

const TaskForm = (props: Props) => {
  const [title, setTitle] = useState();
  const onChangeText = (val:any) =>{
    setTitle(val);
  }
  return (
    <>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={title}
            placeholder='nouvelle tache'
        />
    </>
  )
}

const styles = StyleSheet.create({
    input:{
        borderColor:"black",
        borderWidth:1,
    },
});

export default TaskForm