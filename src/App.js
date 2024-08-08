import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import styles from './App.css';
import styled from 'styled-components';
import './index.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={'logo.png'} className="App-logo" alt="logo" />
        <h1>Witaj na smakówa.pl!</h1>
        <p>Przekonaj się, że zdrowo znaczy pysznie!</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Wyszukaj przepis"
          />
          <button type="submit">Szukaj</button>
        </form>
      </header>
    </div>
  );
};

function container() {
  return (
    <div className="container">
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
    </div>
  );
};

function Styles() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Item 1</div>
      <div className={styles.item}>Item 2</div>
      <div className={styles.item}>Item 3</div>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Item = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

function Items() {
  return (
    <Container>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Container>
  );
}

function flexbox() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-2 p-5 bg-gray-200 border border-gray-400">Item 1</div>
      <div className="m-2 p-5 bg-gray-200 border border-gray-400">Item 2</div>
      <div className="m-2 p-5 bg-gray-200 border border-gray-400">Item 3</div>
    </div>
  );
}

export default App;

