'use client';

import React, { useRef, useState } from 'react';
import { Icon } from '../icons/basicIcon/Icon';

import './copyText.scss';

export const CopyText = ({ text } : { text: string}) => {
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    if (textareaRef.current) {
      textareaRef.current.select(); // Highlight the text
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="copyText">
      <textarea
        ref={ textareaRef }
        value={ text }
        rows={ 1 }
        onClick={ handleCopy }
        className="textArea"
      />
      <button type="button" className="copyButton" onClick={ handleCopy }>
        { copied ? <Icon icon="checkmark2" /> : <Icon icon="files-empty" /> }
      </button>
    </div>
  );
};
