const baseUrl = 'https://openlibrary.org';

export const searchBooks = async (title, author, subject) => {
  let query = '/search.json?';

  if (title) query += `title=${title}&`;
  if (author) query += `author=${author}&`;
  if (subject) query += `subject=${subject}&`;

  try {
    const response = await fetch(
      `${baseUrl}${query}&fields=key,title,author_name,edition_count,editions,editions.subtitle&limit=10`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
