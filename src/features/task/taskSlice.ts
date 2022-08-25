import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import type { PayloadAction } from '@reduxjs/toolkit'

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
}

export type Tasks = {
  tasks: Task[];
}

const initialState: Tasks = {
  tasks: [
    {
      id: 1,
      title: 'task1',
      isDone: false,
    },
    {
      id: 2,
      title: 'task2',
      isDone: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action) => {
      const newItem = {
        id: state.tasks.length + 1,
        title: action.payload,
        isDone: false,
      };
      state.tasks = [...state.tasks, newItem];
    },
    checkedTask: (state, action) => {
      const task: Task | undefined = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    }
  },
});

export const { newTask, checkedTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;