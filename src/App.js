import React, {useState} from 'react';
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import "./index.css";

const App = () => {

  const [notes, setNotes] = useState([]);


  const createNote =(newNote) => {
       setNotes([...notes, newNote])
  }


  return (
    <div className='container mt-3 p-3 '>
      <CreateNote createNote={createNote}/>
      <hr/>
      <AllNotes notes={notes}/>

    </div>
  )
}

export default App;