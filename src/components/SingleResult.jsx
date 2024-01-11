import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ListCard from './ListCard';

function SingleResult(props) {
  const { doc } = props;

  return (
    <ListCard>
      <NavLink
        className='text-pink-600 text-lg font-semibold hover:text-pink-500'
        to={doc.key}
      >
        {doc.title}
        {doc.editions.docs[0].subtitle && `: ${doc.editions.docs[0].subtitle}`}
      </NavLink>
      <div className='flex flex-row justify-between text-slate-500'>
        <p>{doc.author_name && `by ${doc.author_name}`}</p>
        <p className='min-w-fit'>
          {doc.edition_count}
          {doc.edition_count > 1 ? ' editions' : ' edition'}
        </p>
      </div>
    </ListCard>
  );
}

SingleResult.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default SingleResult;
