import PropTypes from 'prop-types';
import ResultCard from './ResultCard';

function Results(props) {
  const { numFound, docs } = props.books;

  return (
    <section>
      <p className='mb-6'>{`Showing ${docs.length} of ${numFound} results`}</p>
      <ul>
        {docs.map((doc) => {
          return <ResultCard doc={doc} key={doc.key} />;
        })}
      </ul>
    </section>
  );
}

Results.propTypes = {
  books: PropTypes.object.isRequired,
  numFound: PropTypes.number,
  docs: PropTypes.array,
};

export default Results;
