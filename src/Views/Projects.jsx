import { useState } from 'react'

import'../assets/css/index.css';
import '../assets/css/index1.css'




function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
   <div>Portfolio For Ian Gottheim in Progress</div>
   <a href = "https://www.linkedin.com/in/ian-gottheim/">Click for LinkedIn</a>
   <div></div>
   <a href = "https://github.com/igottheim">Click for Github</a>
   <div>Phone: 201-906-2950</div>
   <div>Email: iangottheim@gmail.com</div>
   </div>
   <div>Check out Some Amazing Project I Worked On!
   <div>
    <a href = "https://flatironopensource.ml/">Flatiron Open Source</a>
    </div>
    <div>
    <a href = "https://taskforcev2.onrender.com/">Flatiron Miscord</a>
    </div>
   </div>

   </>
  )
}



export default Projects
