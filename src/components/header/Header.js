import React, { useState } from 'react';
import './header.css';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='main-header'>
      <div className='header-logo'>
        <h2>PRO-OTT</h2>
      </div>
      <div>
        <ul className={open ? ' mobile-link' : 'header-links'} onClick={() => setOpen(false)}>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>Shows</a>
          </li>
          <li>
            <a href='/#'>Movie</a>
          </li>
          <li>
            <a href='/#'>Comedy</a>
          </li>
          <li>
            <a href='/#'>news</a>
          </li>
        </ul>
      </div>
      <div className='header-buttons'>
        <input type='text' placeholder='search here' />
        <button>Subscribe</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
