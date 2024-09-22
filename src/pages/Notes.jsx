import React, { useEffect, useState } from 'react';
import db from '../appWrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
import Note from '../components/Note';

function Notes() {
  const [notes, setNotes] = useState([]);

  const init = async () => {
    const response = await db.notes.list([
      Query.orderDesc('$createdAt')
    ]);
    setNotes(response.documents);
  };

  useEffect(() => {
    init();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Notes App</h1>
      
      {/* Note Form */}
      <div className="mb-6">
        <NoteForm setNotes={setNotes} />
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Note key={note.$id} setNotes={setNotes} noteData={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
