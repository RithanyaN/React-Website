import React from 'react'
import {useReducer} from "react"
import "./Reducer.css"
const countReducer =(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return{count:state.count+1};
            case "DECREMENT":
                return{count:state.count-1};
            default:
                return state;
    }
}

export default function Reducer() { 
    const[state,dispatch]=useReducer( countReducer,{count:0})
  return (
    <div>
        <div class="p1">
            <p>Count: {state.count}</p>
        </div>
        <div class="p2">
        <div><button onClick={() => dispatch({type: 'INCREMENT'})}>Add</button></div>
        <div><button onClick={() => dispatch({type: 'DECREMENT'})}>Sub</button></div>
        </div>
    </div>
  )
}
