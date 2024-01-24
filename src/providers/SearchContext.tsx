import { createContext } from 'react';

export type SearchType = {
  books: unknown;
  title: string | undefined;
  author: string | undefined;
  subject: string | undefined;
} | null;

type SearchContextType = {
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType | null>>;
};

const SearchContextState = {
  search: {
    books: null,
    title: '',
    author: '',
    subject: '',
  },
  setSearch: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(SearchContextState);

export default SearchContext;
