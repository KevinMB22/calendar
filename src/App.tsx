import { Calendar,dateFnsLocalizer } from "react-big-calendar";
import SectionHome from "./components/Section";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import frFR from 'date-fns/locale/fr'

export default function App() {

  const locales = {
    'fr-FR': frFR,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
  
  // Rendre automatique la conversion des horaires de l'input de l'evenement dans le format attendu

  const myEventsList = [
    
    {
      id: 0,
      title: "training",
      start: new Date(2024, 0, 9, 9, 0, 0),
      end: new Date(2024, 0, 9, 13, 0, 0),
      resourceId: 1
    },
    {
      id: 1,
      title: "late lunch",
      start: new Date(2024, 0, 9, 10, 30, 0),
      end: new Date(2024, 0, 9, 16, 0, 0),
      resourceId: 2
  }];

  return (
    <div className="w-full h-[100vh] flex justify-center ">
      {/* <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        min={new Date(2024, 0, 9, 8, 0, 0)}
        max={new Date(2024, 0, 9, 22, 0, 0)}
        style={{height:'100vh'}}
        className="w-full"

      /> */}
      <SectionHome/>
    </div>
  );
}