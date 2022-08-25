import React from 'react'
import { useDispatch } from 'react-redux';
import { checkedTask, deleteTask, Task } from './taskSlice';

type Props = {
  task: Task;
}

const TaskItem: React.FC<Props> = ({task}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input type="checkbox" onChange={() => dispatch(checkedTask(task))} />
      <input
        type="text"
        defaultValue={task.title}
        disabled={task.isDone}
      />
      <button onClick={() => dispatch(deleteTask(task))}>削除</button>
    </li>
  )
}

export default TaskItem
