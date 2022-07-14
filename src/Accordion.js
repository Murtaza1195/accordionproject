import React, {useState} from 'react'
// import {AiOutlineMinus,AiOutlinePlus} from '@react-icons'


const Accordion = ({title, info}) => {
  const [showInfo,setShowInfo] = useState(false);


    return ( 
   

       <>
    
     
       <article className="question">
        <header>
        <p>{title}</p>
     <button className="btn" onClick={((e)=>setShowInfo(!showInfo))}>
      {/* yahan setShowInfo (true) kiya, matlab jb bhi circle pay click krein to humesha open rahay, 
      jb k hona yeh chahye k state true(matlab open) hai to click krnay pay false(matlab band ho jaey
      false hai to true ho jaey, ) */}
      {/* See it's opening, But close nahi ho raha,  */}
      {/* If you want k open and close both on same state to negate krna haicurrent state ko, okay?
      dekho by default state close hai na kyun k hum nay usay falsepaas kiya huayesh , Hum chahtay hai jb 
      Hum circle pay click krein to text show ho, dobarah click krein to hide ho jaey, aisa hai?yesh 
      to show Info ko negate krein gay, Matlab Open hai to close ho jaey gi, Close haito open ho jaey gi, smajhAai?yesh 
      Aub dekhtay hai chalta hai bhiya nahi :P
       */}
       </button>

       </header>

     {
      showInfo && 
      <p>{info}</p>
     }
      </article>
       </>
    )
}

export default Accordion
