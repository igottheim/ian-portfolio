import { Hero, Link } from "react-daisyui";

function WorkExperienceHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className=" flex flex-col md:flex-row text-left">
    
    <ul className="list-disc">
    <h1 className="pt-4">Work Experience <a className= "link link-hover" href = "/IanGottheimResume2023.pdf" target = "_blank">[Resume]</a></h1>
      <ul className="list-disc pb-2 pt-2"> <Link href ="    https://www.balfourbeatty.com/">Balfour Beatty</Link>: Senior Project Engineer 
  
        <li>Dates Worked:  08/2015 - 05/2018</li>
        <li className="text-base max-w-prose "> Estimated and bid construction projects, ranging from $100,000 to $20,000,000. Work included new construction and renovations.</li>
        <li className="text-base max-w-prose">Ran day to day project management services on active construction sites, including quality control for subcontractors, budget management, contract preparation, and billing management.</li>
      </ul>

      <ul className="list-disc pb-2 pt-2"> <Link href ="https://bohlerengineering.com/">Bohler</Link>: Senior Design Engineer
        <li>Dates Worked:  06/2018 - 08/2022</li>
        <li className="text-base max-w-prose "> Completed zoning research to create compliant designs within jurisdictional requirements</li>
        <li className="text-base max-w-prose">Site civil grading, stormwater management design, utility design based on jurisdictional requirements and Client goals</li>
        <li className="text-base max-w-prose">Attended Community Meetings and Zoning Hearings</li>
        <li className="text-base max-w-prose">Led weekly Architect/Engineer/Client meetings for projects to keep design tasks on schedule</li>
        <li className="text-base max-w-prose">Prepared contracts, change orders, and billings for Clients</li>
        <li className="text-base max-w-prose">Selected to an annual emerging leaders program (1 of 14 employees) </li>
      </ul>

      <ul className="list-disc pb-2 pt-2"> <Link href ="https://us.orsted.com/">Orsted</Link>: Technical Project Lead
        <li>Dates Worked:  01/2023 - Present</li>
      </ul>
    </ul>
   <img src="/WTC.jpg" alt="FSOS" className="object-scale-down h-100 w-96"/>
      </Hero.Content>
    </Hero>
  );
}

export default WorkExperienceHero;