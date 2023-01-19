import { useState } from 'react'
import CoreFooter from '../Components/CoreFooter';
import CoreHeader from '../Components/CoreHeader';

import { Breadcrumbs } from "react-daisyui";

import'../assets/css/index.css';
import WorkExperienceHero from '../Components/WorkExperience/WorkExperienceHero';

function WorkExperience() {


  return (
    <>
    
    <CoreHeader></CoreHeader>
   <WorkExperienceHero></WorkExperienceHero>
   <CoreFooter></CoreFooter>

   </>
  )
}

export default WorkExperience
