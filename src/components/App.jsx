import React, {useState} from 'react';
import Header from "./header"
import Footer from "./footer"
import Note from "./note";
// import {notes} from "./notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  function handleClick(e){

    setNotes(pValue =>{
      return(
      [...pValue,{title : e.title, content : e.content}]
    )
    })
    console.log(notes)
  }

  function deleteItem(e){
    console.log("Delete"+e)
    setNotes((prevItems) => {
      return prevItems.filter((o, i) => {
        return i !== e;
      });
    });

  }
  return (
    <div>
      <Header />
      <CreateArea onClicked={handleClick}/>
      {notes.map((o,i)=>
        <Note key={i} id={i} title={o.title} content={o.content} onDelete={deleteItem} />
      )}

      <Footer />
    </div>
  );
}

export default App;
