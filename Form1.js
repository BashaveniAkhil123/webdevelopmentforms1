import { useState } from 'react';

import React from 'react';
export default function Form1(props) {

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.setName(document.getElementById("fname").value);
        props.setvar(document.getElementById("lname").value);
        // console.log(name);
        
        
    }
  return (
    <div>
        <form onSubmit={e=>{handleSubmit(e)}}>
        <div>
        
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/>
        
            <input type="submit" value="Submit"/><br/>
            <a href='https://www.youtube.com/watch?v=q5qk5IbZc0k&t=302s'>click</a>
        
        </div>
        
        
        </form>
    </div>
  )
}



