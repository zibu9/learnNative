import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    task: any,
}

const TaskTile = ({task}: Props) => {
  return (
    <View>
        <Image
            style={styles.check}
            source={require('../../../assets/icons/circle2.png')}
        />
        <Text>{task.title}</Text>
        <Image
            style={styles.check}
            source={require('../../../assets/icons/delete2.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    check: {
        width:26,
        height:26,

    },
});

export default TaskTile