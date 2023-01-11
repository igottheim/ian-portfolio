import { useState } from 'react'

import'../assets/css/index.css';
import '../assets/css/index1.css'




function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>Portfolio For Ian Gottheim in Progress</div>
   <a href = "https://www.linkedin.com/in/ian-gottheim/">Click for LinkedIn</a>
   <div></div>
   <a href = "https://github.com/igottheim">Click for Github</a>
   <div>Phone: 201-906-2950</div>
   <div>Email: iangottheim@gmail.com</div>

   <div><img className = "ian" src = '../public/images/108734347.jpg'></img></div>
   </>
  )
}



export default Projects
