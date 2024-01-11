import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorks, getEditions, getAuthors } from '../utils/api';
import { Section, Button, Description } from '../components';
import SearchContext from '../contexts/SearchContext';

export function Works() {
  const [works, setWorks] = useState({
    title: '',
    description: '',
    authors: [],
  });
  const [editions, setEditions] = useState();
  const [authors, setAuthors] = useState();
  const { search } = useContext(SearchContext);
  const { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getWorks(key)
      .then((response) => setWorks(response))
      .catch(() => navigate('/404'));

    getEditions(key).then((response) => setEditions(response));
  }, [key, navigate]);

  useEffect(() => {
    if (works.authors) {
      getAuthors(works.authors.map((x) => x.author.key)).then((response) =>
        setAuthors(response.join(', ').toString())
      );
    }
  }, [works.authors]);

  return (
    <Section>
      <div className='inline-flex items-baseline space-x-4 mb-8'>
        {search.books && (
          <Button onClick={() => navigate(-1)}>{'< Back'}</Button>
        )}
        <h1 className='text-2xl font-medium'>{works.title}</h1>
      </div>
      <p>{authors && `by ${authors}`}</p>
      <Description description={works.description} />
      {editions && (
        <>
          <h1>{`Showing ${editions.entries.length} of ${editions.size} editions`}</h1>
          <br />
          <ul>
            {editions.entries.map((edition) => {
              return (
                <li key={edition.key}>
                  <h1>{edition.title}</h1>
                  <p>
                    <strong>{edition.publish_date}</strong>
                    {edition.publishers &&
                      ' ' + edition.publishers.join(', ').toString()}
                  </p>
                  <p>
                    {edition.isbn_10 &&
                      `ISBN-10: ${edition.isbn_10.join(', ').toString()}`}
                    {!edition.isbn_10 &&
                      edition.isbn_13 &&
                      `ISBN-13: ${edition.isbn_13.join(', ').toString()}`}
                  </p>
                  <p>{edition.languages && edition.languages[0].key}</p>
                  <br />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Section>
  );
}
