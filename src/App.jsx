import './App.css'

import React, { useState } from 'react';

export default function App() {

  const data = [
    {
      id:1,
      heure:'15:30',
      duree: 90
    }
  ]

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <article className="w-[100%] h-[100%] flex items-center">
        <figure className='w-[80px] h-[100%] flex flex-col justify-between items-center'>
          <p>8h</p>
          <p>9h</p>
          <p>10h</p>
          <p>11h</p>
          <p>12h</p>
          <p>13h</p>
          <p>14h</p>
          <p>15h</p>
          <p>16h</p>
          <p>17h</p>
          <p>18h</p>
          <p>19h</p>
          <p>20h</p>
          <p>21h</p>
        </figure>
        <figure className='w-full h-[100%] flex flex-col'>
            <div className='w-full h-[90px] bg-slate-500'>
              <p className='px-3 text-white'>ID 1</p>
            </div>
            <div className='w-full h-[90px] bg-red-500'>
              <p className='px-3 text-white'>ID 1</p>
            </div>
        </figure>

      </article>
    </div>
  );
};


