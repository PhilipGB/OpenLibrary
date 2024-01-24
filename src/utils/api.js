const baseUrl = 'https://openlibrary.org';

export const searchBooks = async (title, author, subject) => {
  let query = '/search.json?';

  //q= rather than title= more closely matches the provided user story
  //if (title) query += `title=${title}&`;
  if (title) query += `q=${title}&`;
  if (author) query += `author=${author}&`;
  if (subject) query += `subject=${subject}&`;

  query += `fields=key,title,author_name,edition_count,editions,editions.subtitle&limit=10`;

  return await openlibrary(query);
};

export const getWorks = async (key) => {
  const query = `/works/${key}.json`;
  const response = await openlibrary(query);

  if ((await response.type?.key) === '/type/redirect') {
    return await openlibrary((await response.location) + '.json');
  }

  return response;
};

export const getEditions = async (key) => {
  const query = `${key}/editions.json?limit=10`;
  return await openlibrary(query);
};

export const getAuthors = async (authors) => {
  const authorsNames = [];

  for (const author of authors) {
    const authorName = await getField(author + '.json', 'name');
    authorsNames.push(authorName);
  }

  return authorsNames;
};

export const getLanguages = async (languageKeys) => {
  const languages = [];

  for (const languageKey of languageKeys) {
    const language = await getField(languageKey + '.json', 'name');
    languages.push(language);
  }

  return languages;
};

export const getField = async (endPoint, field) => {
  const result = await openlibrary(endPoint);

  return result[field];
};

const openlibrary = async (query) => {
  try {
    const response = await fetch(baseUrl + query);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${query}:`, error);
  }
};
