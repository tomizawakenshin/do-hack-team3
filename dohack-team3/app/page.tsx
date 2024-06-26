//"use client";

// import { useEffect } from "react"
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "./api";
import FallMeteor from "./components/FallMeteor";
import styles from "./page.module.css";
import {extinction} from "./components/Meteor"

export default async function Home() {
  const todos = await getAllTodos();
  
  return (
    <div className="flex">
      <main 
        className="
          flex 
          flex-col 
          justify-center 
          min-h-screen 
          py-2
          bg-gray-200
          p-20
          rounded-lg
          ">
        <h1 
          className="
            text-4xl
            font-bold
            text-gray-700
            pl-28
          ">
            隕石ToDo
        </h1>
        <div 
          className="
            w-full
            max-w-xl
            mt-5
            ">
          <div
            className="
            w-full
            px-8
            py-6
            bg-white
            shadow-md
            rounded-lg
            ">
            <AddTask />
            <TodoList todos = {todos}/>
          </div>
        </div>
      </main>
      <main className="
        w-1/2
      ">
        <div>
            <div className="h-4/6 bg-gradient-to-b from-cyan-950">
              <FallMeteor todos = {todos}/>
            </div>
            <img width={700} height={500} src="/image/town.png" alt=""/>
        </div>
      </main>
    </div>
  );
}
