import { Hero, Button } from "react-daisyui";

function ProjectsHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="flex flex-col md:flex-row text-center">
      <div>Portfolio For Ian Gottheim in Progress</div>
   <a href = "https://www.linkedin.com/in/ian-gottheim/">Click for LinkedIn</a>
   <div></div>
   <a href = "https://github.com/igottheim">Click for Github</a>
   <div>Phone: 201-906-2950</div>
   <div>Email: iangottheim@gmail.com</div>
 
   <div>Check Out Some Amazing Projects I Worked On!
   <div>
    <a href = "https://flatironopensource.ml/">Flatiron Open Source</a>
    </div>
    <div>
    <a href = "https://taskforcev2.onrender.com/">Flatiron Miscord</a>
    </div>
   </div>
      </Hero.Content>
    </Hero>
  );
}

export default ProjectsHero;