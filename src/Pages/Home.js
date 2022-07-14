import React from 'react'
import '../Pages/Home.css'

const Home = ({ title, active, setActive }) => {
   // debugger;
    // kya hide krna hai aur kya show?
   
    return (
        <div className='accordion d-flex flex-column mr-auto'>

            <div className= {(active === title ? "show" : " ") + "accordionHeading"}>
                
                <div className='container d-flex flex-row '>
                    <p>{title}</p>
                    <span onClick={() => setActive(title)}>X</span>
                    {/* where is this function being called? which one */}
                </div>
                {/* open the console */}
            </div>

            <div className='accordationContent'>
                <div className=' container '>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaini essentially unchanged. It was popularised in the 1960s with the
                        release of Letrase sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>

            </div>
        </div>
    )
}

// accordionHeading kidhar hai? it a just class  that'sthe class re adding? sorry i didnot get the point 
// You are cancatenating accordionHeading? Where it is yesh, I'm asking where it is, and open console 
// Debuggger to chala hi nahi, Data kahan say liya, open the file

export default Home