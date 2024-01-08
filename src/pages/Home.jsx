import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="w-full h-[90vh] md:h-[100vh]">
            <header className="w-full h-[20vh] flex justify-center items-center">
                <h1 className="text-3xl font-bold">Select a Calendar</h1>
            </header>
            <main className="w-full flex justify-center flex-wrap gap-5">
                <Link to='/calendar-hour'>
                    <button className="py-3 px-3 border-none bg-sky-600 text-white hover:bg-sky-900 duration-200 ease-out">Calendrier Horaire</button>
                </Link>
                <Link to='/calendar-complete'>
                    <button className="py-3 px-3 border-none bg-sky-600 text-white hover:bg-sky-900 duration-200 ease-out">Calendrier Complet</button>
                </Link>
            </main>
        </div>
    )
}