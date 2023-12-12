import React from 'react';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
}

const TableBody = ({ linkData, removeLink, editLink }) => {
    const rows = linkData.map((row, index) => (
        <tr key={index}>
            <td>{row.name}</td>
            <td><a href={row.URL}>{row.URL}</a></td>
            <td>
                <button onClick={() => editLink(index)}>Edit</button>
                <button onClick={() => removeLink(index)}>Delete</button>
            </td>
        </tr>
    ));

    return <tbody>{rows}</tbody>;
};

function Table({ linkData, removeLink, editLink }) {
    return (
        <table>
            <TableHeader />
            <TableBody linkData={linkData} removeLink={removeLink} editLink={editLink} />
        </table>
    );
}

export default Table;
