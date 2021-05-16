import React from 'react'

function List(props) {
    
    const nameList = props.data.name_list.map((name, index) => 
    <li key={index}>
        {name}
    </li>)

    return(
        <div>
           <ul>
            {nameList}
        </ul>
        <textarea className="names-input" name="name" placeholder="Enter all the names here" value={props.data.name} onChange={props.handleChange}/>
        </div>
        
    )
}

export default List