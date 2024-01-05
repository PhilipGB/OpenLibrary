import PropTypes from 'prop-types';

function Results(props) {
  const { books } = props;

  return (
    <section>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </section>
  );
}

Results.propTypes = {
  books: PropTypes.object.isRequired,
};

export default Results;
