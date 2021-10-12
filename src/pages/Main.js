import React from 'react';
import { useSelector } from 'react-redux';
import Top from '../components/Top';
import Home from '../components/Home';
import cover from '../cover.jpg';

const Main = () => {
  const result = useSelector((state) => state.countriesReducer);
  return (
    <>
      <Top />
      <img className="cover-img" src={cover} alt="Grow" />
      <div>
        <Home nasdaq={result} />
      </div>
    </>
  );
};

export default Main;
