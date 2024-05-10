"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { addTodo } from '../api';
import {v4 as uuidv4} from "uuid";

const AddTask = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [date, setDate] = useState("");
    const handleSubmit = async (e : FormEvent) => {

        e.preventDefault();

        await addTodo({id: uuidv4(), text: taskTitle, date: date})
        
        setTaskTitle("");
        setDate("");
    }
  return (
    <form className='m-4 space-y-10' onSubmit={handleSubmit}>
        <div className='space-y-6'>
            <input 
                type='text' 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
                value={taskTitle}
                className='
                w-full 
                border 
                px-4 
                py-2 
                rounded-lg 
                focus:outline-none 
                focus:border-blue-400
                '
            />
            <input
                type='date'
                onChange={(e) => {
                    setDate(new Date(e.target.value).toLocaleDateString("ja-JP"))

                }}
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
            />
        </div>
        <button 
            className='
                w-full
                px-4
                py-2
                text-white
                bg-blue-500
                rounded
                transform
                hover:bg-blue-400
                hover:scale-95
                duration-200
                '>
                    Add Task
        </button>
    </form>
  )
}

export default AddTask