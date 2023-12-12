import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    useEffect(() => {
        fetch('/api/links')
          .then(response => response.json())
          .then(data => setFavLinks(data))
          .catch(err => console.error('Error fetching data:', err));
    }, []);

    const handleRemove = (id) => {
        fetch(`/api/links/${id}`, { method: 'DELETE' })
          .then(() => setFavLinks(prev => prev.filter(link => link.id !== id)))
          .catch(err => console.error('Error deleting data:', err));
    };

    const handleSubmit = (favLink) => {
        fetch('/api/links', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(favLink)
        })
        .then(response => response.json())
        .then(newLink => setFavLinks(prev => [...prev, newLink]))
        .catch(err => console.error('Error posting data:', err));
    };

    return (
        <div className="container">
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={favLinks} removeLink={handleRemove} />
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    );
}

export default LinkContainer;
