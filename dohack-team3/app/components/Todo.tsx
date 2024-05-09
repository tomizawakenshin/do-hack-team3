"use client";

import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../types';
import { deleteTodo, editTodo } from '../api';

interface TodoProps {
    todo: Task;
}

const Todo = ({todo} :TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);
    const [editedDate, setEditedDate] = useState(todo.date);

    useEffect(() => {
        if(isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);
    const handleEdit = async() => {
        setIsEditing(true);
    }

    const handleSave = async() => {
        await editTodo(todo.id, editedTaskTitle)
        setIsEditing(false);
    }
    
    const handleDelete = async() => {
        await deleteTodo(todo.id);
    }
  return (
    <li 
        key={todo.id}
        className='
            flex 
            justify-between 
            p-4 
            bg-white 
            border-l-4
            border-blue-500
            rounded
            shadow
            '>
                {isEditing ? (
                    <div className='space-y-6'>
                        <input
                            ref={ref}
                            type='text'
                            className='
                            mr-2
                            py-1
                            px-2
                            rounded
                            border-gray-400
                            border
                            '
                            value={editedTaskTitle}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                setEditedTaskTitle(e.target.value)
                            }
                        />
                        <input
                            ref={ref}
                            type='date'
                            onChange={(e) => setEditedDate(new Date(e.target.value).toLocaleDateString("ja-JP"))}
                            className='
                            shadow
                            appearance-none
                            border
                            rounded
                            w-full
                            py-2
                            px-3
                            text-gray-700
                            leading-tight
                            focus:outline-none
                            '
                            value={editedDate}
                        />
                    </div>
                ) : (
                    <div className='space-y-3'>
                        <div>{todo.text}</div>
                        <div>{todo.date}</div>
                    </div>
                )}
                <div>
                    {isEditing ? (
                        <button className='text-blue-500 mr-3' onClick={handleSave}>save</button>
                    ) : (
                        <button className='text-green-500 mr-3' onClick={handleEdit}>edit</button>
                    )}
                    <button className='text-red-500' onClick={handleDelete}>Delete</button>
                </div>
    </li>
  )
}

export default Todo