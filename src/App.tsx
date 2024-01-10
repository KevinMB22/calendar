
import SectionHome from "./components/Section";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function App() {


  // Rendre automatique la conversion des horaoires de l'input de l'evenement dans le format attendu

  return (
    <div className="w-full h-[100vh] flex justify-center ">

      <SectionHome/>
    </div>
  );
}