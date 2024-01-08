import PropTypes from 'prop-types';

function Results(props) {
  const { numFound, docs } = props.books;

  return (
    <section>
      <p>{`Showing ${docs.length} of ${numFound} results`}</p>
      {docs.map((doc) => {
        return (
          <ul key={doc.key}>
            <h4>
              {doc.title}
              {doc.editions.docs[0].subtitle &&
                `: ${doc.editions.docs[0].subtitle}`}
            </h4>
            <h6>{`by ${doc.author_name}`}</h6>
            <h6>
              {`${doc.edition_count} ${
                doc.edition_count > 1 ? 'editions' : 'edition'
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
  numFound: PropTypes.number,
  docs: PropTypes.array,
};

export default Results;
