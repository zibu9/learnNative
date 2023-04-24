import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Text, FlatList } from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([{title:'hello world', isCompleted:false}]);
  const renderItem = ({item}:any) =>{
      return <TaskTile task={item} />
  }
  return (
    <>
        <FlatList 
            ListHeaderComponent={
            <>
              <Header />
              <TaskForm />
            </>
          }
            contentContainerStyle={{ flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={renderItem}
        />
    </>
  )
}

export default TaskScreen