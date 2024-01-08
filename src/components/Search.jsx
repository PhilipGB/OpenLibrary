import { useState } from 'react';
import { Form, TextInput, Results } from './';
import { searchBooks } from '../utils/api';

function Search() {
  const [books, setBooks] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [subject, setSubject] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await searchBooks(title, author, subject);
    console.log(data);
    setBooks(data);
  };

  return (
    <div className='p-10 max-w-screen-sm'>
      <Form
        name='Search'
        onSubmit={handleSubmit}
        disableSubmit={!(title || author || subject)}
      >
        <p>Search for a book by title, author or subject</p>
        <p>Use multiple fields to narrow your search.</p>
        <br />

        <TextInput
          name='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <TextInput
          name='Author'
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <TextInput
          name='Subject'
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </Form>
      {books && <Results books={books} />}
    </div>
  );
}

export default Search;
