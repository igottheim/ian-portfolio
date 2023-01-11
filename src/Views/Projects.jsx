import { useState } from 'react'

import'../assets/css/index.css';

import { Breadcrumbs } from "react-daisyui";
import Button from 'react-daisyui';

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>Portfolio For Ian Gottheim in Progress</div>
   <Button href = "https://www.linkedin.com/in/ian-gottheim/">Click for LinkedIn</Button>
   <Button href = "https://github.com/igottheim">Click for Github</Button>
   <div>Phone: 201-906-2950</div>
   <div>Email: iangottheim@gmail.com</div>
   </>
  )
}

export default Projects
