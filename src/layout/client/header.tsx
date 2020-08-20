import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
      <header className="App-header">
        <span>client header</span>
        <Link to='/admin'>Admin</Link>
      </header>
    );
  };
  