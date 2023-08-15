import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>Not found!</h1>
            <p className="flex gap-2 justify-center">Return 
                <Link className="hover:text-red-800 text-blue-200 underline"to="/">home</Link>
            </p>
        </div>
    )
}

export {NotFound}