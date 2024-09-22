import React, { useState } from 'react';
import db from '../appWrite/databases';
import DeleteIcon from '../assets/AssertsIcon';

function Note({ noteData, setNotes }) {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
        const completed = !note.completed;
        await db.notes.update(note.$id, { completed });
        setNote({ ...note, completed });
    };

    const handleDelete = async () => {
        await db.notes.delete(note.$id);
        setNotes((prev) => prev.filter((i) => i.$id !== note.$id));
    };

    return (
        <div className="flex items-center justify-between p-4 mb-2 border rounded shadow hover:shadow-md transition-shadow duration-200">
            <span 
                onClick={handleUpdate} 
                className={`cursor-pointer ${note.completed ? 'line-through text-gray-500' : 'text-black'}`}
            >
                {noteData.body}
            </span>
            <div 
                onClick={handleDelete} 
                className="cursor-pointer text-red-500 hover:text-red-700"
            >
                <DeleteIcon />
            </div>
        </div>
    );
}

export default Note;
