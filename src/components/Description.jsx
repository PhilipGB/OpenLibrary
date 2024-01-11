import PropTypes from 'prop-types';
import { useState } from 'react';

export function Description(props) {
  const { description } = props;
  const [showMore, setShowMore] = useState(false);
  const maxLength = 540;

  const isString = (value) =>
    typeof value === 'string' || value instanceof String;

  const text = isString(description)
    ? description
    : description && isString(description.value)
    ? description.value
    : '';

  const truncatedText = showMore ? text : text.slice(0, maxLength);

  const gradientMask = {
    WebKitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
    height: '140px',
  };

  return (
    <div className='mb-8'>
      <p
        className={`whitespace-pre-wrap my-8 ${
          !truncatedText.length && 'italic'
        }`}
        style={
          !showMore && truncatedText.length >= maxLength ? gradientMask : {}
        }
      >
        {truncatedText.length ? truncatedText : 'NO DESCRIPTION'}
      </p>
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

Description.propTypes = {
  description: PropTypes.any,
};

export default Description;
