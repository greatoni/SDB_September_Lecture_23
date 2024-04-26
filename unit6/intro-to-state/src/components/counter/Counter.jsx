import React from 'react'

export default function Counter(props) {
  

    
    const increment = () => 
        {props.setCount(props.count+ 1)}

    const decrement = () => 
        {props.setCount(props.count- 1)}
  
    return (
    <div>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
    </div>
  )
}
