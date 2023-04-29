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
    tasks: [{ id:1, title: "initial task", isCompleted:false}],
};

const taskList = (state = initialState, action: Action ) =>{
    switch (action.type) {
        default:
            return state;
    }
}
  

export const store = configureStore({
    reducer: combineReducers({
        taskList,
    }),
    devTools:true,
});