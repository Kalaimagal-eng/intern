import React from 'react';
import Task from './Task'; // Import the Card component

function Taskdetails() {
  const cardsData = [
    {
      title: 'Tasks',
      content: 'Name',
    },
   
    {
      title: 'Task 1',
      content: 'Name',
      content: 'Status',
    },
    {
      title:'Task 2',
      content: 'Name',
    },
  ];

  return (
    <div className="App">
      {cardsData.map((card, index) => (
        <Task key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default Taskdetails;
