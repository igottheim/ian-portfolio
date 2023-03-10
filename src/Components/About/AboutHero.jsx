import { Hero, Link } from "react-daisyui";

function AboutHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="flex flex-col md:flex-row text-left">

    <ul className="list-disc pb-4"> 
      <h1 className="pb-4">About Ian</h1>
        <li>I'm from Bergen County, NJ.</li>
        <li>I currently live on the Upper East Side in NYC!</li>
        <li>I graduated from the University of Virginia in 2015 with a BS in Civil & Environmental Engineering.</li>
        <li>I graduated from Flatiron School's Software Engineering Bootcamp in 2022.</li> 
        <li>I am a licensed Professional Engineer in the state of North Carolina: License #054696 </li>
        <li>I lived in Washington, DC after college, before moving to NYC in 2021.</li>
      <li>I am passionate about alternate modes of transportation. Since moving to NYC, I ride the subway or bike everywhere.</li>
      <li>I love to run and hike. I ran the NYC Marathon and hiked Mt. Whitney in 2022.</li>
      <li>I am very interested in infrastructure, which is the reason I pursued civil engineering.</li>
      <li>I like creating clean, well-tested code. Working through bugs and errors with a team is rewarding. </li>



    </ul>
   <img src="/108734347.jpg" alt="FSOS" className="w-50"/>
      </Hero.Content>
    </Hero>
  );
}

export default AboutHero;