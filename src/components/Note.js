import React from 'react'

const Note = ({note}) => {
  return (
    <div className='card mb-3'>
              <div className='card-header'>{note.date} </div>
              <div className="card-body">{note.note}</div>


    </div>
  )
}

export default Note