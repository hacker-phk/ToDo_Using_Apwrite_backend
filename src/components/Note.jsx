import React, { useState } from 'react'
import db from '../appWrite/databases';
import DeleteIcon from "../assets/AssertsIcon"
function Note({noteData,setNotes}) {
    const[note,setNote]=useState(noteData);
    const handleUpdate= async ()=>{
        const completed=!note.completed;

        db.notes.update(note.$id,{completed})
        setNote({...note,completed:completed})
    }
    const handleDelete=async()=>{
        db.notes.delete(note.$id);
        setNotes((prev)=>prev.filter(i => i.$id !== note.$id))
    }
  return (
    <div>
        <span onClick={handleUpdate}>
            {note.completed? <s>{noteData.body}</s>:<>{noteData.body}</>}
        </span>
        <div onClick={handleDelete}>
            <DeleteIcon/>
        </div>
    </div>
  )
}

export default Note