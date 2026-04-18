import { PDFFont } from 'pdf-lib';

export const formatDate = (dateStr: string | undefined | null) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }
  return dateStr;
};

export const splitTextToLines = (text: string, maxWidth: number, font: PDFFont, size: number) => {
  if (!text) return [];
  const lines: string[] = [];
  const paragraphs = text.split('\n');
  for (const paragraph of paragraphs) {
    let currentLine = '';
    const words = paragraph.split(' ');
    for (let w = 0; w < words.length; w++) {
      const word = words[w];
      let remainingWord = word;
      
      while (remainingWord.length > 0) {
        const testLine = currentLine ? currentLine + ' ' + remainingWord : remainingWord;
        if (font.widthOfTextAtSize(testLine, size) <= maxWidth) {
           currentLine = testLine;
           remainingWord = '';
        } else {
           if (currentLine) {
              lines.push(currentLine);
              currentLine = '';
           } else {
              let brokenWord = '';
              for (let i = 0; i < remainingWord.length; i++) {
                 const charTest = brokenWord + remainingWord[i];
                 if (font.widthOfTextAtSize(charTest, size) <= maxWidth) {
                    brokenWord = charTest;
                 } else {
                    break;
                 }
              }
              if (!brokenWord) brokenWord = remainingWord[0];
              lines.push(brokenWord);
              remainingWord = remainingWord.substring(brokenWord.length);
           }
        }
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  return lines;
};

export const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
