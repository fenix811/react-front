import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  hideAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  hideAdmin,
}) => {
    return (
      <header className="App-header">
        <span>client header</span>
        {hideAdmin || 
        <Link to='/admin'>Admin</Link>
      }
      </header>
    );
  };
  