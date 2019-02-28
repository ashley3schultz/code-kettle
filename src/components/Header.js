import React from 'react';

const Header = props => {
      return (
        <div className='header'>
        <img 
            src={require('./images/Logo.png')} 
            alt='logo'
        />
        </div>
    )
}

export default Header