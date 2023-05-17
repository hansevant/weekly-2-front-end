import { Link } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";

export default function NotFound() {
    return (
        <div className="bg-pink-400 h-screen">
            <div className="flex flex-col gap-5 items-center justify-center h-full text-white">
                <h1 className="font-bold text-9xl">404</h1>
                <h2 className="font-medium text-2xl">Sorry, page not found</h2>
                <Link to="/" className="text-blue-500 hover:underline">
                    <PrimaryButton className='px-2'>Back to Home</PrimaryButton>
                </Link>
            </div>
        </div>
    )
}