"use client";

import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../types';
import { deleteTodo, editTodo } from '../api';
import "./Pulsing.css";

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

    if(restDay<=1){
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
                    <div>
                        {isEditing ? (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-blue-500
                                rounded
                                transform
                                hover:bg-blue-400
                                hover:scale-95
                                duration-200'
                                onClick={handleSave}>save</button>
                        ) : (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-green-500
                                rounded
                                transform
                                hover:bg-green-400
                                hover:scale-95
                                duration-200'
                                onClick={handleEdit}>edit</button>
                        )}
                        <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-red-500
                                rounded
                                transform
                                hover:bg-red-400
                                hover:scale-95
                                duration-200'
                                onClick={handleDelete}>Delete</button>
    
                    </div>
                    <div>
                        <span>
                            残り
                            <span className="restday-lessthanoneday kodou-lessthanoneday">
                                {restDay}
                            </span>
                            日
                        </span>
                    </div>
            </li>
        );
    }else if(restDay<=3){
        return(
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
                    <div>
                        {isEditing ? (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-blue-500
                                rounded
                                transform
                                hover:bg-blue-400
                                hover:scale-95
                                duration-200'
                                onClick={handleSave}>save</button>
                        ) : (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-green-500
                                rounded
                                transform
                                hover:bg-green-400
                                hover:scale-95
                                duration-200'
                                onClick={handleEdit}>edit</button>
                        )}
                        <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-red-500
                                rounded
                                transform
                                hover:bg-red-400
                                hover:scale-95
                                duration-200'
                                onClick={handleDelete}>Delete</button>
    
                    </div>
                    <div>
                        <span>
                            残り
                            <span className='restday-lessthanthreedays kodou-lessthanthreedays'>
                                {restDay}
                            </span>
                            日
                        </span>
                    </div>
            </li>
        );
    }else if(restDay<=7){
        return(
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
                    <div>
                        {isEditing ? (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-blue-500
                                rounded
                                transform
                                hover:bg-blue-400
                                hover:scale-95
                                duration-200'
                                onClick={handleSave}>save</button>
                        ) : (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-green-500
                                rounded
                                transform
                                hover:bg-green-400
                                hover:scale-95
                                duration-200'
                                onClick={handleEdit}>edit</button>
                        )}
                        <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-red-500
                                rounded
                                transform
                                hover:bg-red-400
                                hover:scale-95
                                duration-200'
                                onClick={handleDelete}>Delete</button>
    
                    </div>
                    <div>
                        <span>
                            残り
                            <span className="restday-lessthanoneweek kodou-lessthanoneweek">
                                {restDay}
                            </span>
                            日
                        </span>
                    </div>
            </li>
        );
    }else if(restDay<=14){
        return(
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
                    <div>
                        {isEditing ? (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-blue-500
                                rounded
                                transform
                                hover:bg-blue-400
                                hover:scale-95
                                duration-200'
                                onClick={handleSave}>save</button>
                        ) : (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-green-500
                                rounded
                                transform
                                hover:bg-green-400
                                hover:scale-95
                                duration-200'
                                onClick={handleEdit}>edit</button>
                        )}
                        <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-red-500
                                rounded
                                transform
                                hover:bg-red-400
                                hover:scale-95
                                duration-200'
                                onClick={handleDelete}>Delete</button>
    
                    </div>
                    <div>
                        <span>
                            残り
                            <span className="restday-lessthantwoweek kodou-lessthantwoweek">
                                {restDay}
                            </span>
                            日
                        </span>
                    </div>
            </li>
        );
    }else{
        return(
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
                    <div>
                        {isEditing ? (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-blue-500
                                rounded
                                transform
                                hover:bg-blue-400
                                hover:scale-95
                                duration-200'
                                onClick={handleSave}>save</button>
                        ) : (
                            <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-green-500
                                rounded
                                transform
                                hover:bg-green-400
                                hover:scale-95
                                duration-200'
                                onClick={handleEdit}>edit</button>
                        )}
                        <button className='
                                text-white-500
                                w-full
                                px-4
                                py-2
                                text-white
                                bg-red-500
                                rounded
                                transform
                                hover:bg-red-400
                                hover:scale-95
                                duration-200'
                                onClick={handleDelete}>Delete</button>
    
                    </div>
                    <div>
                        <span>
                            残り
                            <span className="restday-morethantwoweek kodou-morethantwoweek">
                                {restDay}
                            </span>
                            日
                        </span>
                    </div>
            </li>
        );
    }
}

export default Todo