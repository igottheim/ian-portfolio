import { Hero, Button } from "react-daisyui";

function AboutHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="flex flex-col md:flex-row text-center">
      <div>About Me</div>
    <p>Hey Everyone! My Name is Ian Gottheim. I am a civil engineer and a software engineer!</p>
      </Hero.Content>
    </Hero>
  );
}

export default AboutHero;