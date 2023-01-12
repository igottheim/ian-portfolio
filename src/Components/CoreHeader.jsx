import { Navbar, Button, Menu, Link } from 'react-daisyui';

function CoreHeader(){
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start>
                    ABOUT
                </Navbar.Start>
               RESUME
                <Navbar.End>
                    <Menu horizontal className="p-0 rounded-lg">
                        <Menu.Item>
                            <Link href="https://github.com/igottheim" target="_blank">Github Account</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default CoreHeader;