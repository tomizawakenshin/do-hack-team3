"use client";

import React, { useEffect, useState } from 'react'
import { Task } from '../types';
import styled from 'styled-components'
import styles from './Meteor.module.css'
//import Sound from './sound/keihou.mp3';
//import useSound from 'use-sound';

interface TodoProps {
    todo: Task;
}

const Meteor = ({todo} : TodoProps) => {
    const [InDanger, SetInDanger] = useState(true);
    const [year, month, day] = todo.date.split('/');
    const date = new Date();
    //const num = 470 - (Number(month) * 30 + Number(day) - (date.getMonth() + 1) * 30 - date.getDate()) * 1;
    const restDay = Number(day) - date.getDate();
    const num = 400 - (restDay) * 10;

    const MeteorLocation = styled.div`
    padding-top: ${num}px;
    `;
    function Play() {
        if(InDanger) {
            console.log("再生中");
            const audio = new Audio('/Audio/keihou.mp3');
            audio.play();
            //SetInDanger(false);
        }
    }

    useEffect(() => {
        if(restDay <= 2) {
            Play();
            SetInDanger(false);
        }
    })

  return (
    <MeteorLocation>
        <div className=' rounded-lg space-y-2'>
            {/* <div className='m-10 text-white'> */}
            
                {restDay > 2 ? (
                    <div className='border border-black rounded-lg'>
                        <div className='m-3 space-y-5'>
                            <div className='items-center'>{todo.text}</div>
                            <div className='border border-white rounded-lg'>
                                <div className='m-3'>あと{restDay}日で人類滅亡！</div>
                            </div>
                        </div>
                    </div>
                 ) : (
                    <div className='border border-red-500 bg-red-500 rounded-lg'>
                        <div className='m-3 space-y-5'>
                            <div className='text-black-500 '>{todo.text}</div>
                            <div className='border border-white rounded-lg'>
                                <div className='text-white m-3'>あと{restDay}日で人類滅亡！</div>
                            </div>
                        </div>
                    </div>
                )}
            <div className={styles.Meteor}>
                <img src='/image/FireColorMeteor.png' className="" width={100} height={100}/>
            </div>
        </div>
    </MeteorLocation>
  )
}

export default Meteor