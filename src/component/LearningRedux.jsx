import React, { useEffect, useState } from 'react'

function LearningRedux() {

   const [post, setPost ] = useState([])
//    'https://jsonplaceholder.typicode.com/posts'
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost({post : data}))
    })
    


    function handleChange(params) {
        post.map(newPost =>{
            <div key={newPost.id}>
                <h3>{newPost.title}</h3>
                <p>{newPost.body}</p>

            </div>
        })
    }
    return (
        <div>
            <h1>Fuction testing</h1>
          {handleChange}
        </div>
    )
}

export default LearningRedux
