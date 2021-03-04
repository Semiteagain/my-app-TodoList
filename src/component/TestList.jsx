import React, { useState } from "react";

function TestList(props) {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }



  function submitItem(e) {
      props.onAdd(item)
      setItem ({
        title : '',
        content : ''
      })
    e.preventDefault();
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        value={item.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={item.content}
        onChange={handleChange}
      />

       <button type="submit" onClick={submitItem} >Add list</button>
    </div>
  );
}

export default TestList;
