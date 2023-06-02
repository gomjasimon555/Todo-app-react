import { useState } from "react";
import "../CounterLayout/counterlayout.css";


function ConterLayout(){
const [count,setCount]=useState(0);

const handleDecrease=()=>{
    setCount(prev => prev-1);  
}


const handleIncrease=()=>{
   setCount(prev => prev+1);
  }

    return (
    <div className="container">

<h1 className="header">Counter</h1>
<div className="count-wrapper">
<button className="count-btn" onClick={handleDecrease}>-</button>
<span className="count">{count}</span>
<button className="count-btn" onClick={handleIncrease}>+</button>
</div>
    </div>
    )
}


export default ConterLayout;