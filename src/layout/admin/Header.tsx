import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
      <header className="App-header">
        <span>admin header</span>
        <Link to='/'>logout</Link>
      </header>
    );
  };
  