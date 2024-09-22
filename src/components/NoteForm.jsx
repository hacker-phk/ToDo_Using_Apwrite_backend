import React from 'react';
import db from '../appWrite/databases';

function NoteForm({ setNotes }) {
    const handleAdd = async (e) => {
        e.preventDefault();
        const noteBody = e.target.body.value;
        if (noteBody === "") return;

        try {
            const payload = { body: noteBody };
            const response = await db.notes.create(payload);
            setNotes((prev) => [response, ...prev]);
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleAdd} className="flex items-center mb-4">
            <input 
                type="text" 
                name="body" 
                placeholder="🤔 What's on the agenda today?" 
                className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <button 
                type="submit" 
                className="ml-4 p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
                Add Note
            </button>
        </form>
    );
}

export default NoteForm;
