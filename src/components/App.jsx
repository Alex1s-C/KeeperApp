import React from 'react';
import Header from "./header"
import Footer from "./footer"
import Note from "./note";
import {notes} from "./notes";

function App() {
  return (
    <div>
      <Header />
      
    {notes.map((o, i) => (
        <Note noteTitle={o.title} noteContent={o.content} key={o.id}/>
      ))}

      <Footer />
    </div>
  );
}

export default App;
