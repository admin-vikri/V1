import React, { useState, useEffect } from "react";
//import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
//import ControlPanel from "./ControlPanel";
import redindiespdf from "../../../pdfs/redindies.pdf";
import dwarkapdf from "../../../pdfs/dwarka.pdf";
import luckyrestopdf from "../../../pdfs/LuckyResto.pdf";
import pourpurepdf from "../../../pdfs/Pourpure.pdf";
import saharabpdf from "../../../pdfs/SaharaBeveges.pdf";
import swaadpdf from "../../../pdfs/swaad.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = (props) => {
  const [scale, setScale] = useState(0.7);
  const [toggle, setToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState(" ");
  console.log(props.url);

  function onDocumentLoadSuccess() {
    // setNumPages(numPages);
    setIsLoading(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function toggleHandler(data) {
    setToggle(data);
  }
  function langHandler(data) {
    setLang(data);
  }

  return (
    <div>
      {/* <Loader isLoading={isLoading} /> */}
      {!isLoading && (
        <section
          id="pdf-section"
          className="d-flex flex-column align-items-center w-100"
        >
          {/* <ControlPanel
            scale={scale}
            setScale={setScale}
            themeHandler={toggleHandler}
            langHandler={langHandler}
          /> */}
          {/* 5.72 */}
          {/* 3.82 */}
          {toggle && props.url === "/PDF-002209DNSP" && (
            <Document file={dwarkapdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
          {/* 9.51
6.36 */}
          {toggle && props.url === "/PDF-001067RIKN" && (
            <Document file={redindiespdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
          {/* 8.07
4.80 */}
          {toggle && props.url === "/PDF-003067PPKN" && (
            <Document file={pourpurepdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
          {/* 12.18
5.94 */}
          {toggle && props.url === "/PDF-004014LRD" && (
            <Document
              file={luckyrestopdf}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
          {/* 3.90
2.80 */}
          {toggle && props.url === "/PDF-005209SBNSP" && (
            <Document file={saharabpdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
          {/* 8.61
4.90 */}
          {toggle && props.url === "/PDF-006014SD" && (
            <Document file={swaadpdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
        </section>
      )}
    </div>
  );
};

export default PDFReader;
