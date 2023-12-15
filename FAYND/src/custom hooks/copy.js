import { useEffect } from 'react';

export const useCopy = (textToCopy) => {
  const handleCopy = async() => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Text copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy text: ', err);
    }
  };
  return { handleCopy };
};
