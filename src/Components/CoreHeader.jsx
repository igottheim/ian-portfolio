import { Navbar, Button, Menu, Link } from 'react-daisyui';
import { BsGithub, BsLinkedin} from "react-icons/bs";


function CoreHeader(){
    return (
        <div className="flex w-full font-sans">
            <Navbar>
                
                <Navbar.Start>
                <img src="/108734347.jpg" alt="FSOS" className="w-10"/>   
               
                <a className = "px-3">Ian Gottheim Portfolio</a>
               
              </Navbar.Start>
              
              <Navbar.Center>
              <Button href="/" className="link link-hover px-4">Landing Page</Button>
                <Button href="/about" className="link link-hover px-4">About Me</Button>
                <Button href="/projects" className="link link-hover">Projects</Button>

              </Navbar.Center>
                <Navbar.End>
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                        <Link href="https://github.com/igottheim" target="_blank"><BsLinkedin/></Link>
                        <Link href="https://github.com/igottheim" target="_blank"><BsGithub/></Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default CoreHeader;