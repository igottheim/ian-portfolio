import { useState } from 'react'
import CoreFooter from '../Components/CoreFooter';
import CoreHeader from '../Components/CoreHeader';

import { Breadcrumbs } from "react-daisyui";

import'../assets/css/index.css';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <CoreHeader></CoreHeader>

   <CoreFooter></CoreFooter>

   </>
  )
}

export default About
