import React from 'react';
import { Link } from 'react-scroll';

const ScrollComp2 = () => {
  const menuItems = ["Home", "About", "Skills", "Work", "Contact"];
  return (
    menuItems.map((name) =>
    <li key={name}>
      <Link className='cursor-pointer' to={name.toLowerCase()} smooth={true} duration={500}>
        {name}
      </Link>
    </li>)
  );
};

export default ScrollComp2;