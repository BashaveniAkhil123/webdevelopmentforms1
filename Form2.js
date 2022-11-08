import React,{useState} from 'react'

const Form2 = (props) => {
    // const [name, setName] = useState("akhil");
    const onChange=e=>{
        // setName("nikhil");
    }

  return (
    <div>   
       
        <h1>{props.variable}</h1>
        <h1>{props.name}</h1>
        {/* <button onClick={()=>setName("nikhil")}>click</button> */}
        

        


      
    </div>
  )
}
export default Form2;

