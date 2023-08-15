import { Link, Outlet } from "react-router-dom";
import { FaLinkedin, FaRegFilePdf, FaEnvelopeOpenText, FaGithub } from "react-icons/fa"
import Photo from "../assets/images/2.png"

const Layout = () => {
    return (
        <div className="w-[750px] m-auto">

            <header className="w-full p-2 flex justify-end space-x-5 text-white border-b border-b-gray-600">
                <Link to="/">About</Link>
                {/* <Link to="/projects">Projects</Link> */}
            </header>

            <div className="flex min-h-[584px]">
                {/* sidebar */}
                <div className="w-[300px] h-full p-2 text-white" >
                    <div className="flex flex-row space-x-2">
                        <img className="w-16 rounded-xl" src={Photo} width={64} height={72} alt="photo"/>
                        <div>
                        <h3 className="">Kirill Dmitriev</h3>
                        <p className="font-light text-[10px] text-[#aeb0b8] pt-1">SRE | Devops | SWE</p>
                        </div>
                    </div>

                    <ul className="flex flex-col py-4 border-b border-b-gray-600 text-[#aeb0b8] text-sm">
                        <li className="flex pb-2 justify-start space-x-2">
                            <FaRegFilePdf size={20} /> 
                            <a href="https://github.com/integer00" target="_blank">CV</a>
                        </li>        
                        <li className="flex pb-2 justify-start space-x-2">
                            <FaLinkedin size={20}/>
                            <a href="https://linkedin.com/in/kidmitriev/" target="_blank">kidmitriev</a>
                        </li>
                        <li className="flex pb-2 justify-start space-x-2">
                            <FaEnvelopeOpenText size={20} />                                
                            <a href="mailto:kiryxa00@gmail.com">kiryxa00@gmail.com</a>
                        </li>
                        <li className="flex justify-start space-x-2">
                            <FaGithub size={20} />
                            <a href="https://github.com/integer00" target="_blank">integer00</a>
                        </li>
                    </ul>

                    {/* maybe projects block in side bar */}

                </div>

                {/* background in future */}
                <div className="flex flex-col w-full shadow-inner">
                    <div className="h-20 bg-[#202227] text-gray-500 p-2 ">
                        {/* maybe some tags in a nice way */}
                        {/* [linux] [terraform] [docker]
                         [golang] [java] [sre] [gcp] [prometheus] */}
                    </div>
                {/* container */}

                    <main className="h-full py-2 px-12 text-center shadow-inner text-white">
                        <Outlet />
                    </main>
                </div>
            </div>

            <footer className="w-full p-5 border-t border-t-gray-600 text-white ">
                {/* <h1>2023</h1> */}
            </footer>

        </div>
    )
}

export {Layout}