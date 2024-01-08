export default function CalendarHour(){

    const data = [{
        id:1,
        start: ''
    }]

    const hourCalendar = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const hVh = 7.7 * 8


    return(
        <div className="w-full h-[100vh] flex">
            <article className="w-full h-full">
                {hourCalendar.map((hours) => (
                    <p key={hours} className="w-full h-[7.7vh] bg-orage-600 border-b border-gray-400 py-2 px-3">{hours} h</p>
                ))}
            </article>
            <article className="w-[95%] h-full absolute top-0 right-0">
                <div className={`w-full h-[7.7vh] mt-[10vh] bg-red-600`}></div>
            </article>

        </div>
    )
}