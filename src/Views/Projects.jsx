import { useState } from 'react'
import CoreHeader from '../Components/CoreHeader';
import CoreFooter from '../Components/CoreFooter';
import'../assets/css/index.css';
import '../assets/css/index1.css'

import ProjectsHero from '../Components/Projects/ProjectsHero';




function Projects() {

  return (
    <>
    <CoreHeader></CoreHeader>
    <ProjectsHero/>
   <CoreFooter></CoreFooter>
   </>
  )
}



export default Projects
