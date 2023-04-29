import { combineReducers, configureStore } from "@reduxjs/toolkit";


interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

// interface TaskState {
//     tasks: Task[];
// }
interface Action {
    type: string;
    payload: any;
}

const initialState: Task[] = [{ id:1, title: "initial task", isCompleted:false}];

const ADD_TASK = "ADD_TASK";
function addTask(title:string){
    return {
        type : ADD_TASK,
        payload : {
            title
        }
    }
}

const taskList = (state = initialState, action: Action ) =>{
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                id: new Date().getTime(),
                title: action.payload.title,
                isCompleted: false,
            }];
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