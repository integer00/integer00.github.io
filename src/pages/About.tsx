const About = () => {
    return(
        <div className="text-left">
            <h1 className="text-2xl">About Me</h1>
            <div className="text-gray-400">
                <p className="text-white py-2 text-lg">👋 , i'm Kirill</p>
                <p>
                Dedicated and result-oriented Site Reliability and DevOps Engineer with five years of hands-on experience.
                </p>
                <p>
                A forward-thinking professional with passion in designing, implementing, and maintaining robust and scalable infrastructure solutions.
                </p>
                <ul className="py-2">
                    <h1 className="text-white">Recent positions:</h1>
                    <li className="py-2">
                        <p>Site Reliability Engineer</p>
                        <p className="text-xs">Tinkoff Bank | Moscow, Russia | 05/2020 - 04/2023</p>
                    </li>
                    <li>
                        <p>DevOps Engineer</p>
                        <p className="text-xs">T-Systems Russia | Saint-Petersburg, Russia | 09/2019 - 05/2020</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export {About}