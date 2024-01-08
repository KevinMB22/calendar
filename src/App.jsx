import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalendarHour from './pages/CalendarHour';
import CalendarComplete from './pages/CalendarComplete';

export default function App() {

  return (
    
    <div className='w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='calendar-hour' element={<CalendarHour/>}/>
          <Route path='calendar-complete' element={<CalendarComplete/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};


