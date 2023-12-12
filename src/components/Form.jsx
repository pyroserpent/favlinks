import React, { useState, useEffect } from 'react';

function Form({ handleSubmit, linkToEdit, resetEdit }) {
    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (linkToEdit) {
            setLinkName(linkToEdit.name);
            setLinkURL(linkToEdit.URL);
            setIsEditing(true);
        }
    }, [linkToEdit]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit({ name: linkName, URL: linkURL, isEditing, id: linkToEdit?.id });
        setLinkName('');
        setLinkURL('');
        setIsEditing(false);
        if (isEditing) resetEdit();
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="linkName">Link Name:</label>
            <input 
                type="text" 
                id="linkName" 
                name="linkName" 
                value={linkName} 
                onChange={(e) => setLinkName(e.target.value)}
            />
            <br /><br />
            <label htmlFor="URL">Link URL:</label>
            <input 
                type="text" 
                id="linkURL" 
                name="linkURL" 
                value={linkURL} 
                onChange={(e) => setLinkURL(e.target.value)}
            />
            <br /><br />
            <input type="submit" value={isEditing ? "Update Link" : "Add Link"} />
        </form>
    );
}

export default Form;
