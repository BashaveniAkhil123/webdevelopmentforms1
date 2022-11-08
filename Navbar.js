import React from 'react'
import{Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <ul>
            <Link to="/"><li>Form1</li></Link>
            <Link to="/Form2 "><li>Form2</li></Link>
            

        </ul>
      
    </div>
  )
}
