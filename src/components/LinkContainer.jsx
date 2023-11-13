import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        // Remove the link at the specified index
        const updatedLinks = favLinks.filter((_, i) => i !== index);
        setFavLinks(updatedLinks);
    };

    const handleSubmit = (favLink) => {
        // Add the new favorite link to the array
        setFavLinks([...favLinks, favLink]);
    };

    return (
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={favLinks} removeLink={handleRemove} />
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    );
}

export default LinkContainer;
