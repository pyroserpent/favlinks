import React, { useState } from 'react';

function Form({ handleSubmit }) {
    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit({ name: linkName, URL: linkURL });
        setLinkName('');
        setLinkURL('');
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
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
