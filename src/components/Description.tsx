import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function Description({ description }: { description: string }) {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 300;

  const text =
    description?.replaceAll('https://openlibrary.org', '') ??
    `This edition doesn't have a description yet`;

  const truncatedText = showMore ? text : text.slice(0, maxLength);

  const gradientMask = {
    WebKitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    height: '100px',
  };

  return (
    <div className='mb-8'>
      <section
        className='whitespace-pre-wrap my-8'
        style={
          !showMore && truncatedText.length >= maxLength ? gradientMask : {}
        }
      >
        <ReactMarkdown>{truncatedText}</ReactMarkdown>
      </section>
      {text.length > maxLength && (
        <button
          onClick={() => setShowMore(!showMore)}
          className='font-bold text-pink-600 hover:text-pink-500'
        >
          {showMore ? '...Less' : 'More...'}
        </button>
      )}
    </div>
  );
}

export default Description;
