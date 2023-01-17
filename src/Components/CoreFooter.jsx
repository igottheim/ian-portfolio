import { Footer } from "react-daisyui";

function CoreFooter(){
    return (
        <Footer className="p-25">
            <div>
                <p>
                    Ian Gottheim Portfolio
                    <br />
                    Civil Engineer|Software Engineer
                </p>
            </div>
            <div>
                <Footer.Title>Lessons</Footer.Title>
                <a href="/" className="link link-hover">Landing Page</a>
                <a href="/about" className="link link-hover">About Me</a>
                <a href="/projects" className="link link-hover">Projects</a>
            </div>
        </Footer>
    );
}

export default CoreFooter;