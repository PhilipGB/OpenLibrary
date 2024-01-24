import { useEffect, useState } from 'react';
import { getLanguages } from '../utils/api';
import PropTypes from 'prop-types';
import ListCard from './ListCard';

function SingleEdition({ edition }) {
  const [languages, setLanguages] = useState('');

  useEffect(() => {
    if (edition.languages) {
      getLanguages(edition.languages.map((x) => x.key)).then((response) =>
        setLanguages(response.join(', ').toString())
      );
    }
  }, [edition.languages]);

  return (
    <ListCard>
      <h1 className='text-lg font-semibold'>{edition.title}</h1>
      <p>
        <strong>{edition.publish_date}</strong>
        {edition.publishers && ' ' + edition.publishers.join(', ').toString()}
      </p>
      <div className='flex flex-row justify-between text-slate-500'>
        <p>{languages}</p>
        <p>
          {edition.isbn_10 &&
            `ISBN-10: ${edition.isbn_10.join(', ').toString()}`}
          {!edition.isbn_10 &&
            edition.isbn_13 &&
            `ISBN-13: ${edition.isbn_13.join(', ').toString()}`}
        </p>
      </div>
    </ListCard>
  );
}

SingleEdition.propTypes = {
  edition: PropTypes.object.isRequired,
};

export default SingleEdition;
