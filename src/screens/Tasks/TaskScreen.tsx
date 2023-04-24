import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Text, FlatList } from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TaskScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onAddTask = (title:string) => {
      setTasks([
        ...tasks, {
          id:Date.now(),
          title,
          isCompleted:false
        }
      ]);
  }

  const deleteTask = (id:any) =>{
      let newTasks: Task[] = [];
      tasks.forEach(t=>{
        if(t.id!== id){
          newTasks.push(t);
          return;
        }
      });
      setTasks(newTasks);    
  }

  const renderItem = ({item}:any) =>{
    return <TaskTile 
              task={item} 
              onUpdateTask={updateTask} 
              onDeleteTask={deleteTask}
            />
  }

  const updateTask = (id:any) => {
      let newTasks: Task[] = [];
      tasks.forEach(t=>{
        if(t.id!== id){
          newTasks.push(t);
          return;
        }

        newTasks.push({
          id:t.id,
          title:t.title,
          isCompleted: !t.isCompleted,
        });
      });

      setTasks(newTasks)
  }

  return (
    <>
        <FlatList 
            ListHeaderComponent={
            <>
              <Header />
              <TaskForm onAddTask={onAddTask} />
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