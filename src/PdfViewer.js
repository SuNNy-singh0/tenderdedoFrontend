import React from 'react'
import { Document, Page } from 'react-pdf';
const PdfViewer = (props) => {
    const {path} = props;
    const pdfURL = path;
   return (
    <div>
    <Document file={pdfURL}>
    <Page pageNumber={1} />
    </Document>
    </div>
    );
 };

export default PdfViewer