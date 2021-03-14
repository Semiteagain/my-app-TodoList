import React, { useState,useEffect } from 'react'

function LearningRedux() {

   const [post, setPost ] = useState([])
//    'https://jsonplaceholder.typicode.com/posts'

      useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => setPost(data))
         
      }, [])


    return (
        <div>
            <h1>Fuction testing</h1>
         
           {post.map(item => {
               return <div key={item.id}>
                   <h3>{item.title}</h3>
                   <p>{item.body}</p>
                   </div>
           })}
        
        </div>
    )

    }
   


export default LearningRedux
