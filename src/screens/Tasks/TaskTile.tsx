import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    task: any,
}

const TaskTile = ({task}: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Image
                style={styles.check}
                source={require('../../../assets/icons/circle2.png')}
            />
            <Text style={styles.title}>{task.title}</Text>
        </View>
        <Image
            style={styles.check}
            source={require('../../../assets/icons/delete2.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:20,
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    title:{
        marginLeft:20,
        fontSize:18,
    },
    check: {
        width:26,
        height:26,
    },
});

export default TaskTile