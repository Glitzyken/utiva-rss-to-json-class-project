import React from "react";

function InputField(props) {
  return (

    <div>
     <input type="text" value={props.url} onChange={props.getUrl}/> 
    </div>
  
    )
   
}

export default InputField;
