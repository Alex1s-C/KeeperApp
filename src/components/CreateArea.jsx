import React, {useState} from "react";

function CreateArea(props) {
    const [noteContent,setContent] = useState({
        title :"",
        content : ""
    });

    function handleChange(e){
        const { value, name } = e.target;
        setContent(pValue =>{
            return{
            ...pValue,
            [name]: value
            }
        });

    };



  return (
    <div>
      <form >
        <input onChange={handleChange} name="title" placeholder="Title" value={noteContent.title}/>
        <textarea onChange={handleChange}  name="content" placeholder="Take a note..." rows="3" value={noteContent.content}/>
        <button type="button" onClick={() => {
        props.onClicked(noteContent);
      }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
