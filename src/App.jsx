import './App.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import React, { useState } from 'react';
import CalendarTest from './Calendar';

export default function App() {

  const localizer = momentLocalizer(moment)

  const data = [
    {
      id:1,
      heure:'15:30',
      duree: 90
    }, 
  ]

  const events = [
    {
      id: 1,
      title: 'Event 1',
      start: moment('2024-01-08T10:00:00').toDate(),
      end: moment('2024-01-08T12:00:00').toDate(),
    },
    // Add more events as needed
  ];

  return (
    <div className='w-full lg:h-[100vh] flex justify-center items-center'>
        <CalendarTest/>
    </div>
  );
};


