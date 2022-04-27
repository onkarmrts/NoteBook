import React, {useState} from "react";

const CreateNote = () => {

const [note, setNote] = useState('');

const handleSubmit = (e) => {
          e.preventDeafult();
          const data = {
                    note
          }
          console.log(data);
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
