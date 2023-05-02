import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    toggle: () => void;
    open: boolean;
}

const FloatingBtn = ({
    toggle,
    open,
}: Props) => {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
        <Text style={styles.txt}>{open ? "x" : "+"}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn:{
      position:'absolute',
      right:20,
      bottom:20,
      borderRadius:40,
      height:40,
      width:40,
      backgroundColor:"orange",
      justifyContent:"center",
    },
    txt:{
      textAlign:"center",
      fontSize:20,
      color:"#fff",
      fontWeight:"bold",

    },
});

export default FloatingBtn