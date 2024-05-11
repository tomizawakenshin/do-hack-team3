"use client";

import React from 'react'
import { Task } from '../types';
import styled from 'styled-components'

interface TodoProps {
    todo: Task;
}

const Meteor = ({todo} : TodoProps) => {
    const [year, month, day] = todo.date.split('/');
    const date = new Date();
    //const num = 470 - (Number(month) * 30 + Number(day) - (date.getMonth() + 1) * 30 - date.getDate()) * 1;
    const num = 400 - (Number(day) - date.getDate()) * 10;

    const MeteorCss = styled.div`
    padding-top: ${num}px;
    `;

  return (
    <MeteorCss>
        <div className='border bg-slate-500 rounded-lg'>
            <div className='m-10 text-white'>
                {/* {todo.text} */}
                {num}
            </div>
        </div>
    </MeteorCss>
  )
}

export default Meteor