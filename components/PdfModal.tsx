import { useState } from 'react';
import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from '../styles/PDFModal.module.scss';


const PDFModal = ({file, className, closeModal}: any) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const onDocumentLoadSuccess = ({ numPages }: {numPages: number}) => {
        setNumPages(numPages);
    }

    const updatePageNumber = (value: number) => {
        if((pageNumber + value) > 0 && (pageNumber + value) <= numPages)
            setPageNumber(pageNumber+value)
    }

    return (
        <div className={className}>
            <div className={styles.controller}>
                <span onClick={() => {updatePageNumber(-1)}}>{"<"}</span>
                <p>Page {pageNumber} of {numPages}</p>
                <span><Link href={file}>Download</Link></span>
                <span onClick={() => {updatePageNumber(1)}}>{">"}</span>
            </div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className={styles.canvas}>
                <Page height={650} pageNumber={pageNumber} onClick={closeModal}/>
            </Document>
        </div>
    );
}

export default PDFModal;
