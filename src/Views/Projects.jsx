import { useState } from 'react'

import'../assets/css/index.css';



function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>Portfolio For Ian Gottheim in Progress</div>
   <div href = "https://www.linkedin.com/in/ian-gottheim/">Click for LinkedIn</div>
   <div href = "https://github.com/igottheim">Click for Github</div>
   <div>Phone: 201-906-2950</div>
   <div>Email: iangottheim@gmail.com</div>
   </>
  )
}

export default Projects
