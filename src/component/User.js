import React, { useState } from "react";

const User=()=>{
    const [data,setData]=useState();
    const [count,setCount]=useState();
    return(
        <div>
            <h1>{data}</h1>
            <label>{count}</label>
            <input type="text" name="username" onChange={(e)=>setData(e.target.value)}></input>
            <button onClick={(e)=>setCount("hello ashish")}>update data</button>
        </div>
    )
}

export default User;