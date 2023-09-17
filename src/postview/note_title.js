import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Note_title = () => {

    const [notes, setNotes] = useState([]);
    
    useEffect(() => { 
        get_notes(); 
    }, []);
       

    const get_notes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/get_notes/`);
            const data = response.data
            setNotes(data);
            console.log('data',data)
        } catch (error) 
            {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }        
    };

  return (
    <div>
        <div>
            <div className="notes">
                <div className="notes-header">
                    <h2 className="notes-title">&#9782; Notes</h2>
                    <p className="notes-count">{notes.length}</p>
                </div>
                <div className='notes-list'>
                    {notes.map((note, index) => (
                        <h3>{note.note_title}</h3>  
                    ))}
                </div>                                 
            </div>
        </div>
    </div>
  )
}

export default Note_title
