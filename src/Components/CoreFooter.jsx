import { Footer } from "react-daisyui";

function CoreFooter(){
    return (
        <Footer className="p-5 text-neutral-content relative">
            <div>
                <a>© Ian Gottheim</a>
                <a>Civil Engineer || Software Engineer</a>
            </div>
           
            <div className="absolute bottom-0 right-0">
                <a href="/" className="link link-hover">About Me</a>
                <a href="/workexperience" className="link link-hover">Work Experience</a>
                <a href="/projects" className="link link-hover">Projects</a>
            </div>

        
        </Footer>

    );
}

export default CoreFooter;