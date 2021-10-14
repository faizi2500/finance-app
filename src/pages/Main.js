import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAPIcall } from '../redux/home/home';
import Top from '../components/Top';
import Home from '../components/Home';
import cover from '../assets/cover.jpg';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAPIcall());
  }, []);
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
