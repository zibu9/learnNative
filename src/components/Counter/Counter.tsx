import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title : string;
    nb: number;
}

const FloatingBtn = ({
    title,
    nb,
}: Props) => {
  return (
    <View>
        <Text style={styles.nb}>{nb}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nb:{
        fontWeight:"bold",
        fontSize:20,
    },
    title:{
        fontWeight:"bold",
        color:"grey",
        fontSize:16,

    },
});

export default FloatingBtn