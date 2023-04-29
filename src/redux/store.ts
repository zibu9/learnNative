import { combineReducers, configureStore } from "@reduxjs/toolkit";


interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskState {
    tasks: Task[];
}
interface Action {
    type: string;
    payload: any;
}

const initialState: TaskState = {
    tasks: [],
};

const taskList = () =>{
    
}
  

export const store = configureStore({
    reducer: combineReducers({}),
    devTools:true,
});