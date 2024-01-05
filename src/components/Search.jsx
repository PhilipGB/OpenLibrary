function Search() {
  return (
    <form>
      <h2>Search</h2>
      <p>Search for a book by title, author or subject</p>
      <p>Use multiple fields to narrow your search.</p>

      <label>
        Title
        <input type='text' id='title' name='title' />
      </label>

      <label>
        Author
        <input type='text' id='lname' name='author' />
      </label>

      <label>
        Subject
        <input type='text' id='subject' name='subject' />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default Search;
