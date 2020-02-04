import React, { Fragment } from 'react';
import './subject.css';



const Subject = ({ user, message }) => {
    return (
        <textarea>{user}: {message}</textarea>
    );
};


export default Subject;