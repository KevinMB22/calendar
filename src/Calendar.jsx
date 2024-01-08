export default function CalendarTest(){

    const hourCalendar = [8,9,10,11,12,13,14,15,16,17,18,19,20];

    return(
        <div className="w-full h-[100vh]">
            <article className="w-full h-[100vh]">
                {hourCalendar.map((hours) => (
                    <p key={hours} className="w-full h-[7.7vh] bg-orage-600 border-b border-gray-400 px-3">{hours} h</p>
                ))}
            </article>
            <article className="w-[90%] h-[100vh] absolute top-0 right-0 border-l border-gray-400">
                <div className="w-full h-[9vh] mt-[7.7vh] bg-red-600"></div>
            </article>

        </div>
    )
}