import React from 'react'
import db from '../appWrite/databases';
function NoteForm({setNotes}) {
    const handleAdd=async (e)=>{
       e.preventDefault();
       const noteBody=e.target.body.value;
       if(noteBody == "")return;
       try{
        const payload={body:noteBody};
        const response=await db.notes.create(payload);
        console.log(response)
        setNotes((prev)=> [response,...prev])
        e.target.reset();
       }
       catch(err){
        console.log(err);
       }

    }
  return (
   <form onSubmit={handleAdd}>
    <input type="text" name='body' placeholder="🤔 What's on the agenda? the task" />
   </form>
  )
}

export default NoteForm