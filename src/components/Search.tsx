import { useState, useContext } from 'react';
import { Form, TextInput, Results, Section } from '.';
import { searchBooks } from '../utils/api';
import SearchContext from '../providers/SearchContext';

function Search() {
  const { search, setSearch } = useContext(SearchContext);
  const [books, setBooks] = useState(search?.books);
  const [title, setTitle] = useState(search?.title);
  const [author, setAuthor] = useState(search?.author);
  const [subject, setSubject] = useState(search?.subject);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await searchBooks(title, author, subject);

    setBooks(data);
    setSearch({
      books: data,
      title: title,
      author: author,
      subject: subject,
    });
  };

  return (
    <Section>
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
      {books ? <Results books={books} /> : null}
    </Section>
  );
}

export default Search;
