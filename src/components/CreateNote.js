import React, {useState} from "react";

const CreateNote = ({createNote}) => {

const [note, setNote] = useState('');

const handleSubmit = (e) => {
          e.preventDefault();
          const data = {
                    note,
                    id:Math.floor(Math.random()*1000),
                    date:new Date().toJSON().slice(0,10),
                    isImportant: false
          }
           
          createNote(data);
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-gorup">
          <textarea
            cols="3"
            placeholder="write your dream notes"
            className="form-control"
            value={note}
            onChange={e => setNote(e.target.value)}
          ></textarea>
          <button className="btn" type="submit">
            add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
