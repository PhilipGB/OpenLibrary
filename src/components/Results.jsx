import PropTypes from 'prop-types';

function Results(props) {
  const { numFound, docs } = props.books;

  return (
    <section>
      <p>{`Showing 10 of ${numFound} results`}</p>
      {docs.map((doc) => {
        return (
          <ul key={doc.key}>
            <h3>{doc.title}</h3>
            <h4>{`by ${doc.author_name}`}</h4>
            <h6>
              {`${doc.edition_count} edition${
                doc.edition_count > 1 ? 's' : ''
              }`}
            </h6>
          </ul>
        );
      })}
    </section>
  );
}

Results.propTypes = {
  books: PropTypes.object.isRequired,
  numFound: PropTypes.number.isRequired,
  docs: PropTypes.array.isRequired,
};

export default Results;
