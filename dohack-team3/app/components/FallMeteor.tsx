import React from 'react'
import { Task } from '../types';
import Meteor from './Meteor';

interface TodoListProps {
    todos: Task[];
}
const FallMeteor = ({todos} : TodoListProps) => {
  return (
    <ul className='flex justify-between mx-5'>
        {todos.map((todo) => (
            <Meteor key={todo.id} todo={todo}/>
        ))}
    </ul>
  )
}

export default FallMeteor