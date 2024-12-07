import React, { useState } from 'react'
import { Typography,TextField, Button } from '@mui/material'

const TodoList = () => {
    var [txt , settxt] = useState("");
     var [task , settask] = useState([]);

     function handleclick(){
        if(txt.trim() !== ""){
            if(task.includes(txt.trim())){
            alert("Task Already Exsist");
            }
            else{
                settask([...task , txt]);
                settxt("");
            }
        }
     }
     function HandleRemove(index){
        if(window.confirm("Are You Sure?")){
            settask(task.filter((_,i)=> i !== index))
        }
     }
  return (
    <div>
      <Typography variant='h1' fontFamily={'fantasy'}>
        Todo-List
      </Typography>
      <TextField label="Enter Task" variant='filled' placeholder='Enter Task' value={txt} type='text' sx={{my:2}}
       onChange={(e)=>{settxt(e.target.value)}} /><br/>
       <Button type='submit' onClick={handleclick} variant='contained' color='primary' sx={{fontSize: 25}}>+</Button>

       {task.length === 0 ? (
        <p>Click on <b>+</b> to Add Task</p>
       ):(
        <div style={{ width: `50%`, marginLeft: `25%`, fontSize:20}}>
 <ul >
        {task.map((a,i)=>(
            <li key={i}>{a}
            &nbsp;<Button onClick={()=>HandleRemove(i)} variant='contained' color='primary' >X</Button>
            </li>
        ))}
       </ul>
        </div>
  
       )}
    </div>
  )
}

export default TodoList
