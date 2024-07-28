 // modal component containg two inputs fields with sates of heading and description 

import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Modal = ({ closeModal }) => {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async(e) => {

        e.preventDefault();
        await axios.post('https://headstarter-feedback-backend.vercel.app/api/updates', {
            heading,
            description,
        });

        setHeading('');
        setDescription('');
        closeModal();
        toast.success('Update added successfully');
    };
    
    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={closeModal}>
            &times;
            </span>
            <h2>Add Update</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Heading:
                <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                />
            </label>
            <label>
                Description:
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </label>
            <button type="submit">Add Update</button>
            </form>
        </div>
        </div>
    );
    }



    export default Modal;