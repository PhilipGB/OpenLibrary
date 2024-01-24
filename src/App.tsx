import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Search, My404 } from './components';
import { Works } from './routes/Works';
import { SearchType, SearchContext } from './providers/SearchContext';

function App() {
  const [search, setSearch] = useState<SearchType>({
    books: null,
    title: '',
    author: '',
    subject: '',
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <BrowserRouter>
        <main className='text-slate-700 bg-pink-50 min-h-screen'>
          <Header>Open Library</Header>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/works/:key/:title?' element={<Works />} />
            <Route path='*' element={<My404 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
