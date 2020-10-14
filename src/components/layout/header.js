import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={ headerStyle }>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '7px'    
}

export default Header