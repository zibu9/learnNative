import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn/FloatingBtn';
import Counter from '../../components/Counter/Counter';
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from '../../redux/store';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TaskScreen = () => {
  const tasks = useSelector(getTasks);
  console.log("ALl task", tasks);
  const [formVisible, setFormVisble] = useState(false);

  const deleteTask = (id:any) =>{
      // let newTasks: Task[] = [];
      // tasks.forEach(t=>{
      //   if(t.id!== id){
      //     newTasks.push(t);
      //     return;
      //   }
      // });
      // setTasks(newTasks);    
  }

  const renderItem = ({item}:any) =>{
    return <TaskTile 
              task={item} 
              onUpdateTask={updateTask} 
              onDeleteTask={deleteTask}
            />
  }

  const updateTask = (id:any) => {
      // let newTasks: Task[] = [];
      // tasks.forEach(t=>{
      //   if(t.id!== id){
      //     newTasks.push(t);
      //     return;
      //   }

      //   newTasks.push({
      //     id:t.id,
      //     title:t.title,
      //     isCompleted: !t.isCompleted,
      //   });
      // });

      // setTasks(newTasks);
  }

  const _toggleForm = () =>{
    setFormVisble(!formVisible);
  }

  return (
    <>
        <FlatList 
            ListHeaderComponent={
            <>
              <Header />
              {formVisible && <TaskForm />}               
              <View style={styles.container}>
                <Counter nb={tasks.length} title='Toutes les taches' />
                <Counter nb={tasks.filter((t:any)=>t.isCompleted===true).length} title='Terminé' />
               </View>
            </>
          }
            contentContainerStyle={{ flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={renderItem}
        />
        <FloatingBtn toggle={_toggleForm} open={formVisible} />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,
    paddingHorizontal:20,
  },
});

export default TaskScreen