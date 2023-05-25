import React from 'react';

export const App = ({ name }) => {
    return (
        <h2 className='lime-text'>
            Hello, <span className='breeze-text'>{name}</span>!
        </h2>
    );
}
