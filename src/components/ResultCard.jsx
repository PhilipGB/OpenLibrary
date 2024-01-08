import PropTypes from 'prop-types';

function ResultCard(props) {
  const { doc } = props;

  return (
    <li className='bg-white rounded-md mb-1 py-4 px-6 w-auto'>
      <h4 className='text-lg font-semibold'>
        {doc.title}
        {doc.editions.docs[0].subtitle && `: ${doc.editions.docs[0].subtitle}`}
      </h4>
      <div className='flex flex-row justify-between'>
        <p>{doc.author_name && `by ${doc.author_name}`}</p>
        <p>
          {doc.edition_count} {doc.edition_count > 1 ? ' editions' : ' edition'}
        </p>
      </div>
    </li>
  );
}

ResultCard.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default ResultCard;
