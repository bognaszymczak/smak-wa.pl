import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchQuery = query.get('query');
  return <div>Wyniiki wyszukiwania dla: {searchQuery}</div>;
};

export default SearchPage;