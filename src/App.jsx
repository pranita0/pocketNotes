import { useState } from "react";
import "./App.css";
import NoteDetails from "./pages/NoteDetails";
import NotesGroup from "./pages/NotesGroup";
import NotesModal from "./components/NotesModal";

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>setShowModal(true)} className="create-notes-group">+ Create Notes group</button>
          {showModal && <NotesModal onClose={()=>setShowModal(false)}/>}
          <NotesGroup name={"juhi"} color={"blue"} />
        </div>
        <NoteDetails />
        
      </div>
      
    </>
  );
}

export default App;
