
import './App.css';
import React, { useState } from 'react';
import dataItems from './data';
import Accordion from './Accordion';



function App() {
  const [questions, setQuestions] = useState(dataItems);
  return (
  <>
  <main>
  {/* node  */}
<div className="container">
  <h4 className="info"> Accordion implementation</h4>
{
  questions?.map ((item) =>{
    debugger
    return(
      <Accordion ky={item.id} {...item}/>
    )
//  Smajh Aai?
// Destructuring, Spread Operator, and this keyword, yeh topic dekh lein Agar Aaj ho jaatay to theak
// nahito Eid k baad dekh lein, kyun k in k baghair coding ok
  })
}
</div>
</main>
  </>
  );
}

export default App;

