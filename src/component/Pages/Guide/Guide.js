/** @format */

import React from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import PDF from '../../../assets/Guide Me.pdf';

const Guide = () => {
  return (
    <div style={{ overflow: 'scroll', height: 200 }}>
      <MobilePDFReader url={PDF} />
    </div>
  );
};

export default Guide;
