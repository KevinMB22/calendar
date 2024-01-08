export default function CalendarTest(){

    const hourCalendar = [8,9,10,11,12,13,14,15,16,17,18,19,20];

    return(
        <div className="w-full h-[100vh] bg-slate-400 grid grid-cols-6">
            <article className="w-full h-[100vh]">
                {hourCalendar.map((hours) => (
                    <p key={hours} className="w-full h-[7.7%] bg-orage-600 border-b border-black">{hours} h</p>
                ))}
            </article>
            <article className="col-span-5 bg-red-600"></article>

        </div>
    )
}