import React from 'react'
import './nav.css';
import { BrowserRouter as Router,  Route,  Link,  Switch} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link active" href="#">Active</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link active" href="#">Active</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link active" href="#">Active</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
