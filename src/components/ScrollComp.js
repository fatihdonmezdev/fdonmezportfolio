import React from 'react';
import { Link } from 'react-scroll';

const ScrollComp = ({onTouch}) => {
  const menuItems = ["Home", "About", "Skills", "Work", "Contact"];
function setOnClick () {
  onTouch(false)
}
  return (
    menuItems.map((name) =>
    <li key={name}>
      <Link onClick={setOnClick} className='cursor-pointer' to={name.toLowerCase()} smooth={true} duration={500}>
        {name}
      </Link>
    </li>)
  );
};

export default ScrollComp;