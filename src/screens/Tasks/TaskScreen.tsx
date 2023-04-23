import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Text, FlatList } from 'react-native';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([{title:'hello world', isCompleted:false}]);
  const renderItem = ({item}:any) =>{
      return <Text>{item.title}</Text>
  }
  return (
    <>
        <FlatList 
            ListHeaderComponent={<Header />}
            contentContainerStyle={{ flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={renderItem}
        />
    </>
  )
}

export default TaskScreen