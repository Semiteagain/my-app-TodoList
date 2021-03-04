import React from 'react'

function ListEvent(props) {
   
    function handleDelete() {
        props.deleteItem(props.id)
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content} </p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default ListEvent
