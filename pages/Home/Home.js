
import Slider from '../../components/Slider/Slider';
import { api } from '../../config/site.config';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import PastelesPage from '../PastelPage/PastelesPage';




export default function Home() {

  
  // render
  return (
    <>
      <div className="container my-7" >
        <Slider />
      </div>

     <PastelesPage/>



    </>
  );
}
