// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'grey', padding: '10px', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
