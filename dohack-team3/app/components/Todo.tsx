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
    const [year, month, day] = todo.date.split('/');
    const date = new Date();
    const restDay = Number(day) - date.getDate();

    useEffect(() => {
        if(isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);
    const handleEdit = async() => {
        setIsEditing(true);
    }

    const handleSave = async() => {
        await editTodo(todo.id, editedTaskTitle, editedDate)
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
                            type='date'
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
                            onChange={(e) => setEditedDate(new Date(e.target.value).toLocaleDateString("ja-JP"))}
                        />
                    </div>
                ) : (
                    <div className='space-y-3'>
                        <div>{todo.text}</div>
                        <div>{todo.date}</div>
                    </div>
                )}
                <div className='space-y-3'>
                    {isEditing ? (
                        <button className='text-blue-500 mr-3' onClick={handleSave}>save</button>
                    ) : (
                        <button className='text-green-500 mr-3' onClick={handleEdit}>edit</button>
                    )}
                    <button className='text-red-500' onClick={handleDelete}>Delete</button>
                    <div>
                        {restDay >= 0 ? (
                            <div>残り{restDay}日で人類滅亡</div>
                        ) : (
                            <div>人類は滅亡しました</div>
                        )}
                    </div> 
                </div>
    </li>
  )
}

export default Todo