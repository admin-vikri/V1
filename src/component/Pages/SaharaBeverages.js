import React from 'react'
import { useLocation } from "react-router-dom";
import Meals from '../Meals/Meals';

const SaharaBeverages = () => {
  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;
  return (
    <main>
      <Meals url={url} />
    </main>
  );
}

export default SaharaBeverages