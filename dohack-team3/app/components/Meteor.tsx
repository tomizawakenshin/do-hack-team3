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
    const num = (Number(month) * 30 + Number(day) - (date.getMonth() + 1) * 30 - date.getDate()) * 100;
    const num2 = 700;

    const MeteorCss = styled.div`
    padding-top: ${num}px;
    
    `;

  return (
    <MeteorCss>
        {Number(month) * 30 + Number(day) - (date.getMonth() + 1) * 30 - date.getDate()}
    </MeteorCss>
    // <div>{(date.getMonth() + 1) + "/" + date.getDate()}</div>
  )
}

export default Meteor