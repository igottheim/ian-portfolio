import { Hero, Link } from "react-daisyui";

function ProjectsHero() {
  return(
    <Hero>
    <Hero.Overlay />
    <Hero.Content className="flex flex-col md:flex-row text-left">

    <ul className="list-disc pb-2 pt-2"> <Link href ="https://flatironopensource.com/">Flatiron Open Source</Link>
        <li><Link href ="https://github.com/umuthopeyildirim/FlatironOpenSource">Github Link</Link></li>
        <li className="text-base max-w-prose ">Web Application created using html and javascript files provided upon bootcamp graduation. The site re-creates the internal web interface provided during the Flatiron Bootcamp course. </li>
        <li className="text-base max-w-prose ">Front-End: React and DaisyUI </li>
        <li className="text-base max-w-prose ">Back-End: NodeJS and CloudFlare </li>
        <li className="text-base max-w-prose "> Python library BeautifulSoup used for formatting/scraping bootcamp provided graduation files </li>
        <img src="/FOS.jpg" alt="FSOS" className="object-scale-down h-100 w-96"/>
      </ul>

      <ul className="list-disc pb-2 pt-2"> <Link href ="https://taskforcev2.onrender.com/">Flatiron Miscord</Link>
      <li><Link href ="https://github.com/igottheim/TaskForceV2">Github Link</Link></li>
        <li className="text-base max-w-prose ">Live Messenger Application using React (front end) and Rails(back end) </li>
        <li className="text-base max-w-prose ">Implemented WebSockets using ActionCable  </li>
        <li className="text-base max-w-prose ">Implemented Authentication using Bcrypt</li>
        <li className="text-base max-w-prose ">Deployed website to render.com to allow for users on multiple computers during initial demonstration of app</li>
        <img src="/FlatironMiscord.jpg" alt="FSOS" className="object-scale-down h-100 w-96"/>
      </ul>

    </Hero.Content>
  </Hero>
  );
}

export default ProjectsHero;