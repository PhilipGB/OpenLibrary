import { useState } from 'react';
import Results from './Results';

function Search() {
  const [books, setBooks] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [subject, setSubject] = useState();

  const searchBooks = async (event) => {
    event.preventDefault();
    try {
      const baseUrl = 'https://openlibrary.org/search.json?';

      let query = '';

      if (title) query += `title=${title}&`;
      if (author) query += `author=${author}&`;
      if (subject) query += `subject=${subject}&`;

      const response = await fetch(
        `${baseUrl}${query}&fields=key,title,author_name,edition_count,editions,editions.subtitle&limit=10`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <>
      <form onSubmit={searchBooks}>
        <h2>Search</h2>
        <p>Search for a book by title, author or subject</p>
        <p>Use multiple fields to narrow your search.</p>

        <label>
          Title
          <input
            type='text'
            id='title'
            name='title'
            value={title ?? ''}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          Author
          <input
            type='text'
            id='author'
            name='author'
            value={author ?? ''}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>

        <label>
          Subject
          <input
            type='text'
            id='subject'
            name='subject'
            value={subject ?? ''}
            onChange={(event) => setSubject(event.target.value)}
          />
        </label>
        <input
          type='submit'
          value='Submit'
          disabled={!(title || author || subject)}
        />
      </form>
      {books && <Results books={books} />}
    </>
  );
}

export default Search;
