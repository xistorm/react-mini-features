import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleExpand = () => setExpand(!expand);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (expand) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [expand])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={handleExpand}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(link => <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(contact => <li key={contact.id}><a href={contact.url}>{contact.icon}</a></li>)}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
