import { Navbar, Button, Menu, Link } from 'react-daisyui';
import { BsGithub, BsLinkedin} from "react-icons/bs";


function CoreHeader(){
    return (
        <div className="flex flex-col">
            <Navbar>
                
                <Navbar.Start> 
                <a className = "px-3">Ian Gottheim Portfolio</a>
               
              </Navbar.Start>
              
              <Navbar.Center>
                <Button href="/" className="link link-hover px-2">About Me</Button>
                <Button href="/workexperience" className="link link-hover px-2">Work Experience</Button>
                <Button href="/projects" className="link link-hover">Projects</Button>

              </Navbar.Center>
                <Navbar.End>
                    <Menu horizontal>
                        <Menu.Item>
                        <Link href="https://www.linkedin.com/in/ian-gottheim/" target="_blank"><BsLinkedin/></Link>
                        <Link href="https://github.com/igottheim" target="_blank"><BsGithub/></Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default CoreHeader;