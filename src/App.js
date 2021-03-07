import React, { useState } from "react";
import Heading from "./component/Heading";
import LearningRedux from "./component/LearningRedux";
import ListEvent from "./component/ListEvent";
import TestList from "./component/TestList";

function App() {
  const [list, setList] = useState([]);

  function addList(newList) {
    setList((prevList) => {
      return [...prevList, newList];
    });
  }

  function onDelete(id) {
    setList(prevList =>{
      return prevList.filter((newItem, index) =>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Heading />

      <TestList onAdd={addList} />

      {list.map((prevDetails, index) => {
        return (
          <ListEvent key={index} id={index} title={prevDetails.title} content={prevDetails.content} deleteItem={onDelete} />
        );
      })}

       <LearningRedux />
    </div>
  );
}

export default App;
