import mammoth from 'mammoth';


import { PDFDocument } from 'pdf-lib';

export const loadPdf = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  let text = '';

  for (const page of pages) {
    const pageText = await page.getTextContent();
    pageText.items.forEach((item) => {
      text += item.str + ' ';
    });
  }

  return text;
};

  
  const loadWord = async (url) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };


  export { loadWord};