import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorks, getEditions, getAuthors } from '../utils/api';
import { Section, Button, Description, SingleEdition } from '../components';
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
          <p className='mb-6'>{`Showing ${editions.entries.length} of ${editions.size} editions`}</p>
          <ul>
            {editions.entries.map((edition) => {
              return <SingleEdition edition={edition} key={edition.key} />;
            })}
          </ul>
        </>
      )}
    </Section>
  );
}
