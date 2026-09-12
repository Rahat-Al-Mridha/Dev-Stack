
import logo from "../assets/logo-text.png"

const nav = () => {
    return (
        <nav className="h-20 border-b border-gray-100 bg-white">
            <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <ul className="flex gap-4 font-medium items-center">
                        <li className="text-pink-600">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-medium">Sign In</p>
                    <button className="rounded-full bg-pink-600 px-5 py-2 font-medium text-white transition hover:bg-pink-700">Sign Up</button>
                </div>
            </div>

        </nav>
    );
};

export default nav;