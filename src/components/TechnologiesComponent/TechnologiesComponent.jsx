import React from 'react';
import './TechnologiesComponent.css';
import TecnologyItem from './TecnologyItem/TecnologyItem';


export default function TechnologiesComponent() {

  return (
    <div className='canvas'>
      <TecnologyItem name="react"></TecnologyItem>
      <TecnologyItem name="angular"></TecnologyItem>
      <TecnologyItem name="tailwind"></TecnologyItem>
      <TecnologyItem name="react"></TecnologyItem>
      <TecnologyItem name="angular"></TecnologyItem>
      <TecnologyItem name="tailwind"></TecnologyItem>
    </div>
  )
  
}